// Configuración centralizada del sitio
// Edita estos valores para personalizar toda la aplicación

export const siteConfig = {
  // Información de la empresa
  company: {
    name: 'TriExpert Credit',
    legalName: 'TriExpert Services',
    tagline: 'Reparación de Crédito Legal',
    description: 'Auditoría legal de crédito bajo ley FCRA. Aumenta tu puntuación, elimina deudas incorrectas y accede a mejores tasas.',
    foundedYear: 2015,
    currentYear: new Date().getFullYear(),
  },

  // Contacto
  contact: {
    phone: '+1 (813) 369-3340',
    email: 'support@triexpertservice.com',
    location: 'Tampa, FL',
  },

  // URLs
  urls: {
    base: process.env.NEXT_PUBLIC_APP_URL || 'https://triexpertservice.com',
    onboarding: '/onboarding',
  },

  // Estadísticas (actualizar según datos reales)
  stats: {
    clients: '10,000+',
    successRate: '85%',
    avgPointsIncrease: '150+',
  },

  // SEO
  seo: {
    title: 'TriExpert Credit | Reparación de Crédito Legal',
    description: 'Mejora tu puntuación de crédito hasta 200+ puntos. Auditoría legal bajo FCRA, expertos certificados. Consulta gratuita.',
    keywords: ['reparación de crédito', 'mejorar score', 'auditoría crédito', 'FCRA', 'eliminar deudas', 'Tampa FL'],
    ogImage: '/og-image.jpg',
  },

  // Precios
  pricing: {
    startingPrice: '$99/mes',
    consultaGratis: true,
  },

  // Trust badges
  trustBadges: [
    'Certificado FCRA',
    '100% Confidencial',
    'Garantía de Satisfacción',
  ],
};

// Servicios/Features
export const features = [
  {
    iconName: 'DollarSign',
    title: 'Mejora tu Puntuación',
    description: 'Incrementa tu score de crédito hasta 200+ puntos en 6 meses',
  },
  {
    iconName: 'Shield',
    title: 'Protección Legal',
    description: 'Auditoría completa de tu reporte de crédito bajo ley FCRA',
  },
  {
    iconName: 'Zap',
    title: 'Resultados Rápidos',
    description: 'Plan personalizado en 48 horas tras tu solicitud',
  },
  {
    iconName: 'BarChart3',
    title: 'Análisis Profesional',
    description: 'Expertos certificados en reparación de crédito',
  },
  {
    iconName: 'Clock',
    title: 'Seguimiento 24/7',
    description: 'Monitoreo continuo de tu crédito y actualizaciones semanales',
  },
  {
    iconName: 'TrendingUp',
    title: 'Acceso a Crédito',
    description: 'Califica para mejores tasas hipotecarias y de autos',
  },
];

// Testimonios
export const testimonials = [
  {
    name: 'María García',
    role: 'Propietaria de negocio',
    content: '¡Increíble! Mejoraron mi score en 150 puntos. Ahora tengo acceso a crédito que antes no podía obtener.',
    rating: 5,
  },
  {
    name: 'Juan Rodríguez',
    role: 'Profesional',
    content: 'El proceso fue muy transparente y profesional. Mi deuda se redujo significativamente.',
    rating: 5,
  },
  {
    name: 'Carmen López',
    role: 'Gerente',
    content: 'En 3 meses conseguí la aprobación para mi hipoteca. Los resultados hablan por sí solos.',
    rating: 5,
  },
];

// Proceso de trabajo
export const processSteps = [
  {
    number: '1',
    title: 'Auditoría Inicial',
    description: 'Análisis completo de tu reporte de crédito gratis',
  },
  {
    number: '2',
    title: 'Plan Personalizado',
    description: 'Estrategia específica basada en tu situación',
  },
  {
    number: '3',
    title: 'Ejecución',
    description: 'Nuestro equipo disputa errores y negocia con acreedores',
  },
  {
    number: '4',
    title: 'Monitoreo',
    description: 'Seguimiento continuo hasta alcanzar tu meta',
  },
];

// FAQs
export const faqs = [
  {
    question: '¿Cuánto tiempo toma mejorar mi crédito?',
    answer: 'Los primeros cambios se ven en 30-60 días. Resultados significativos entre 3-6 meses.',
  },
  {
    question: '¿Es legal la reparación de crédito?',
    answer: 'Completamente legal bajo la FCRA (Fair Credit Reporting Act). Nuestro equipo está certificado.',
  },
  {
    question: '¿Cuál es el costo?',
    answer: 'Planes desde $99/mes. Consulta gratuita para determinar el mejor plan para ti.',
  },
  {
    question: '¿Garantizan resultados?',
    answer: 'No hay garantías de resultados específicos, pero tenemos 85% de éxito en mejorar puntuaciones.',
  },
  {
    question: '¿Qué pasa si tengo deudas en cobranzas?',
    answer: 'Podemos negociar pagos reducidos o eliminación de deudas de tu reporte.',
  },
];

// Navegación
export const navigation = {
  main: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Términos', href: '/terminos' },
    { label: 'Disclaimer FCRA', href: '/fcra' },
  ],
};
