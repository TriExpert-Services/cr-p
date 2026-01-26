import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    console.log('Datos recibidos en API:', Object.fromEntries(formData));

    // Reenviar al webhook de n8n
    const response = await fetch('https://n8n.ragoxcell.com/webhook/cr-pro2026', {
      method: 'POST',
      body: formData,
      headers: {
        // No incluir Content-Type para que FormData lo maneje automáticamente
      },
    });

    console.log('Respuesta de n8n:', response.status, response.statusText);

    if (response.ok) {
      const responseData = await response.text();
      console.log('Respuesta del webhook:', responseData);
      return NextResponse.json(
        { success: true, message: '¡Registro exitoso! Iniciando análisis...' },
        { status: 200 }
      );
    } else {
      const errorText = await response.text();
      console.error('Error del webhook:', response.status, errorText);
      return NextResponse.json(
        { success: false, message: `Error ${response.status}: ${response.statusText}` },
        { status: response.status }
      );
    }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error en API:', errorMsg, error);
    return NextResponse.json(
      { success: false, message: `Error del servidor: ${errorMsg}` },
      { status: 500 }
    );
  }
}
