# TriExpert Credit

Plataforma de reparación de crédito legal con landing page y formulario de onboarding.

## Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Validación:** Zod
- **Icons:** Lucide React

## Inicio Rápido

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
npm start
```

## Variables de Entorno

Copia `.env.example` a `.env.local` y configura:

| Variable | Descripción | Requerido |
|----------|-------------|-----------|
| `WEBHOOK_URL` | URL del webhook n8n para procesar formularios | Sí |
| `NEXT_PUBLIC_APP_URL` | URL base de la aplicación | No |
| `RATE_LIMIT_MAX` | Máximo de requests por minuto | No |
| `RATE_LIMIT_WINDOW_MS` | Ventana de rate limiting en ms | No |

## Estructura del Proyecto

```
cr-p/
├── app/
│   ├── page.tsx              # Landing page principal
│   ├── layout.tsx            # Layout raíz con SEO
│   ├── globals.css           # Estilos globales
│   ├── onboarding/
│   │   └── page.tsx          # Formulario de registro
│   └── api/
│       └── submit-form/
│           └── route.ts      # API endpoint con validación
├── lib/
│   └── config.ts             # Configuración centralizada
├── .env.example              # Plantilla de variables
└── .env.local                # Variables locales (no en git)
```

## Características

- Landing page responsive con diseño cyberpunk
- Formulario de onboarding con validación Zod
- API route con rate limiting y sanitización
- SEO optimizado con Open Graph y Twitter Cards
- Integración con webhook externo (n8n)

## Personalización

Edita `lib/config.ts` para cambiar:

- Información de la empresa
- Datos de contacto
- Estadísticas
- Servicios y testimonios
- FAQs

## Seguridad

- Variables sensibles en `.env.local` (excluido de git)
- Validación de datos con Zod
- Sanitización de inputs
- Rate limiting por IP
- Sin logs de datos sensibles

## Scripts

```bash
npm run dev      # Desarrollo (localhost:3000)
npm run build    # Build de producción
npm run start    # Ejecutar build
npm run lint     # Verificar código con ESLint
```

## Licencia

Privado - TriExpert Services
