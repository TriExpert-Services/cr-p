'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle, ArrowRight, Star, Users, TrendingUp, Lock, Zap, BarChart3,
  DollarSign, Clock, Shield, Phone, Mail, MapPin, Menu, X
} from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Mejora tu Puntuación",
      description: "Incrementa tu score de crédito hasta 200+ puntos en 6 meses"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Protección Legal",
      description: "Auditoría completa de tu reporte de crédito bajo ley FCRA"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Resultados Rápidos",
      description: "Plan personalizado en 48 horas tras tu solicitud"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Análisis Profesional",
      description: "Expertos certificados en reparación de crédito"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Seguimiento 24/7",
      description: "Monitoreo continuo de tu crédito y actualizaciones semanales"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Acceso a Crédito",
      description: "Califica para mejores tasas hipotecarias y de autos"
    }
  ];

  const testimonials = [
    {
      name: "María García",
      role: "Propietaria de negocio",
      content: "¡Increíble! Mejoraron mi score en 150 puntos. Ahora tengo acceso a crédito que antes no podía obtener.",
      rating: 5
    },
    {
      name: "Juan Rodríguez",
      role: "Profesional",
      content: "El proceso fue muy transparente y profesional. Mi deuda se redujo significativamente.",
      rating: 5
    },
    {
      name: "Carmen López",
      role: "Gerente",
      content: "En 3 meses conseguí la aprobación para mi hipoteca. Los resultados hablan por sí solos.",
      rating: 5
    }
  ];

  const process = [
    {
      number: "1",
      title: "Auditoría Inicial",
      description: "Análisis completo de tu reporte de crédito gratis"
    },
    {
      number: "2",
      title: "Plan Personalizado",
      description: "Estrategia específica basada en tu situación"
    },
    {
      number: "3",
      title: "Ejecución",
      description: "Nuestro equipo disputa errores y negocia con acreedores"
    },
    {
      number: "4",
      title: "Monitoreo",
      description: "Seguimiento continuo hasta alcanzar tu meta"
    }
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo toma mejorar mi crédito?",
      answer: "Los primeros cambios se ven en 30-60 días. Resultados significativos entre 3-6 meses."
    },
    {
      question: "¿Es legal la reparación de crédito?",
      answer: "Completamente legal bajo la FCRA (Fair Credit Reporting Act). Nuestro equipo está certificado."
    },
    {
      question: "¿Cuál es el costo?",
      answer: "Planes desde $99/mes. Consulta gratuita para determinar el mejor plan para ti."
    },
    {
      question: "¿Garantizan resultados?",
      answer: "No hay garantías de resultados específicos, pero tenemos 85% de éxito en mejorar puntuaciones."
    },
    {
      question: "¿Qué pasa si tengo deudas en cobranzas?",
      answer: "Podemos negociar pagos reducidos o eliminación de deudas de tu reporte."
    }
  ];

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white overflow-x-hidden">
      {/* Orbes de fondo */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="relative z-40 border-b border-cyan-500/20 glassmorphism sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              TriExpert Credit
            </Link>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex gap-8">
              <a href="#servicios" className="text-indigo-300 hover:text-cyan-400 transition">Servicios</a>
              <a href="#proceso" className="text-indigo-300 hover:text-cyan-400 transition">Proceso</a>
              <a href="#testimonios" className="text-indigo-300 hover:text-cyan-400 transition">Testimonios</a>
              <a href="#faq" className="text-indigo-300 hover:text-cyan-400 transition">FAQ</a>
            </div>

            {/* CTA Button */}
            <Link href="/onboarding" className="hidden md:block cyberpunk-button px-6 py-2 rounded-lg text-sm font-medium">
              Comenzar Ahora
            </Link>

            {/* Menu Mobile */}
            <button
              className="md:hidden text-cyan-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-4">
              <a href="#servicios" className="text-indigo-300 hover:text-cyan-400">Servicios</a>
              <a href="#proceso" className="text-indigo-300 hover:text-cyan-400">Proceso</a>
              <a href="#testimonios" className="text-indigo-300 hover:text-cyan-400">Testimonios</a>
              <a href="#faq" className="text-indigo-300 hover:text-cyan-400">FAQ</a>
              <Link href="/onboarding" className="cyberpunk-button px-6 py-2 rounded-lg text-sm font-medium inline-block text-center">
                Comenzar Ahora
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Reparación de Crédito Legal</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Recupera Tu Libertad Financiera
          </h1>

          <p className="text-lg md:text-xl text-indigo-300 max-w-2xl mx-auto mb-12">
            Aumenta tu puntuación de crédito, elimina deudas incorrectas y accede a mejores tasas de interés. Nuestros expertos certificados han ayudado a más de 10,000 clientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/onboarding" className="cyberpunk-button px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 group">
              Auditoría Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <button className="px-8 py-4 rounded-lg font-bold border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition">
              📞 Llamar Ahora
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="glassmorphism p-6 rounded-lg">
              <div className="text-3xl font-bold text-cyan-400">10,000+</div>
              <div className="text-indigo-300 text-sm">Clientes Satisfechos</div>
            </div>
            <div className="glassmorphism p-6 rounded-lg">
              <div className="text-3xl font-bold text-cyan-400">85%</div>
              <div className="text-indigo-300 text-sm">Tasa de Éxito</div>
            </div>
            <div className="glassmorphism p-6 rounded-lg">
              <div className="text-3xl font-bold text-cyan-400">150+</div>
              <div className="text-indigo-300 text-sm">Puntos Promedio</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex items-center gap-2 text-cyan-400">
            <CheckCircle className="w-5 h-5" />
            <span>Certificado FCRA</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-400">
            <CheckCircle className="w-5 h-5" />
            <span>100% Confidencial</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-400">
            <CheckCircle className="w-5 h-5" />
            <span>Garantía de Satisfacción</span>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="relative z-10 py-20 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Nuestros Servicios
          </h2>
          <p className="text-center text-indigo-300 max-w-2xl mx-auto mb-16">
            Soluciones completas para tu recuperación crediticia
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="glassmorphism p-8 rounded-xl hover:border-cyan-400/50 transition group cursor-pointer"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-indigo-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="relative z-10 py-20 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Nuestro Proceso
          </h2>
          <p className="text-center text-indigo-300 max-w-2xl mx-auto mb-16">
            4 pasos simples para recuperar tu crédito
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="glassmorphism p-8 rounded-xl text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-indigo-300 text-sm">{step.description}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="relative z-10 py-20 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-center text-indigo-300 max-w-2xl mx-auto mb-16">
            Historias reales de transformación financiera
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="glassmorphism p-8 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-indigo-200 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 py-20 border-t border-cyan-500/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Preguntas Frecuentes
          </h2>
          <p className="text-center text-indigo-300 max-w-2xl mx-auto mb-16">
            Respuestas a tus dudas más comunes
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="glassmorphism p-6 rounded-lg group cursor-pointer"
              >
                <summary className="flex items-center justify-between font-bold hover:text-cyan-400 transition">
                  {faq.question}
                  <ArrowRight className="w-5 h-5 text-cyan-400 group-open:rotate-90 transition" />
                </summary>
                <p className="text-indigo-300 mt-4 text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 py-20 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            ¿Listo para Cambiar Tu Vida Financiera?
          </h2>
          <p className="text-lg text-indigo-300 max-w-2xl mx-auto mb-8">
            Tu auditoría de crédito gratuita te espera. Sin compromiso, sin cargos ocultos.
          </p>
          <Link href="/onboarding" className="cyberpunk-button px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 group">
            Comenzar Mi Auditoría Gratis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-cyan-500/20 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
                TriExpert Credit
              </h3>
              <p className="text-indigo-300 text-sm">
                Tu socio en la recuperación crediticia desde 2015.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Navegación</h4>
              <ul className="space-y-2 text-indigo-300 text-sm">
                <li><a href="#servicios" className="hover:text-cyan-400 transition">Servicios</a></li>
                <li><a href="#proceso" className="hover:text-cyan-400 transition">Proceso</a></li>
                <li><a href="#testimonios" className="hover:text-cyan-400 transition">Testimonios</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Legal</h4>
              <ul className="space-y-2 text-indigo-300 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Términos</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Disclaimer FCRA</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Contacto</h4>
              <ul className="space-y-2 text-indigo-300 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  +1 (813) 369-3340
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  support@triexpertservice.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  Tampa, FL
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 pt-8 text-center text-indigo-300 text-sm">
            <p>© 2024 TriExpert Services. Todos los derechos reservados.</p>
            <p className="mt-2 text-xs">Este sitio no está afiliado ni respaldado por ninguna agencia de crédito. FCRA Copyright Notice aplicable.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
