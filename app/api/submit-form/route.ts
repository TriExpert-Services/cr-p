import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema de validación con Zod
const formSchema = z.object({
  nombre: z.string().min(2, 'Nombre debe tener al menos 2 caracteres').max(50),
  apellido: z.string().min(2, 'Apellido debe tener al menos 2 caracteres').max(50),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Teléfono debe tener al menos 10 dígitos').max(15),
  ssn: z.string().length(4, 'SSN debe tener exactamente 4 dígitos').regex(/^\d{4}$/, 'SSN debe ser numérico'),
  dob: z.string().min(1, 'Fecha de nacimiento requerida'),
  address: z.string().min(5, 'Dirección debe tener al menos 5 caracteres').max(200),
  city: z.string().min(2, 'Ciudad requerida').max(50),
  state: z.string().min(2, 'Estado requerido').max(50),
  zip: z.string().min(5, 'Código postal requerido').max(10),
});

// Rate limiting simple en memoria (para producción usar Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX || '10');
const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000');

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

// Sanitizar datos para prevenir inyección
function sanitizeString(str: string): string {
  return str.trim().replace(/<[^>]*>/g, '');
}

export async function POST(request: NextRequest) {
  try {
    // Verificar rate limit
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Demasiadas solicitudes. Intenta de nuevo en un minuto.' },
        { status: 429 }
      );
    }

    // Verificar que el webhook URL esté configurado
    const webhookUrl = process.env.WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('[API] WEBHOOK_URL no configurado');
      return NextResponse.json(
        { success: false, message: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

    const formData = await request.formData();

    // Extraer y validar datos del formulario
    const rawData = {
      nombre: sanitizeString(formData.get('nombre')?.toString() || ''),
      apellido: sanitizeString(formData.get('apellido')?.toString() || ''),
      email: sanitizeString(formData.get('email')?.toString() || ''),
      phone: sanitizeString(formData.get('phone')?.toString() || ''),
      ssn: sanitizeString(formData.get('ssn')?.toString() || ''),
      dob: sanitizeString(formData.get('dob')?.toString() || ''),
      address: sanitizeString(formData.get('address')?.toString() || ''),
      city: sanitizeString(formData.get('city')?.toString() || ''),
      state: sanitizeString(formData.get('state')?.toString() || ''),
      zip: sanitizeString(formData.get('zip')?.toString() || ''),
    };

    // Validar con Zod
    const validation = formSchema.safeParse(rawData);
    if (!validation.success) {
      const errors = validation.error.errors.map(e => e.message).join(', ');
      return NextResponse.json(
        { success: false, message: `Datos inválidos: ${errors}` },
        { status: 400 }
      );
    }

    // Validar archivo PDF si existe
    const file = formData.get('reporte');
    if (file && file instanceof File) {
      if (file.type !== 'application/pdf') {
        return NextResponse.json(
          { success: false, message: 'El archivo debe ser un PDF' },
          { status: 400 }
        );
      }
      // Limitar tamaño a 10MB
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { success: false, message: 'El archivo no debe superar 10MB' },
          { status: 400 }
        );
      }
    }

    // Reconstruir FormData con datos validados
    const validatedFormData = new FormData();
    Object.entries(validation.data).forEach(([key, value]) => {
      validatedFormData.append(key, value);
    });
    if (file && file instanceof File) {
      validatedFormData.append('reporte', file);
    }

    // Enviar al webhook (sin logear datos sensibles)
    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: validatedFormData,
    });

    if (response.ok) {
      return NextResponse.json(
        { success: true, message: '¡Registro exitoso! Iniciando análisis...' },
        { status: 200 }
      );
    } else {
      console.error('[API] Error webhook:', response.status);
      return NextResponse.json(
        { success: false, message: 'Error al procesar la solicitud. Intenta de nuevo.' },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error('[API] Error interno:', error instanceof Error ? error.message : 'Unknown');
    return NextResponse.json(
      { success: false, message: 'Error del servidor. Intenta de nuevo más tarde.' },
      { status: 500 }
    );
  }
}
