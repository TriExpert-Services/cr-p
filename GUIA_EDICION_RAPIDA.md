# 🎯 Guía Rápida - Editar tu Landing Page

## 📝 Cómo Cambiar el Contenido

### 1. **Cambiar Números Principales**

**Archivo:** `app/page.tsx`

Busca estas líneas y reemplaza con tus números:

```tsx
// Línea ~196 - Estadísticas del Hero
<div className="text-3xl font-bold text-cyan-400">10,000+</div>
<div className="text-indigo-300 text-sm">Clientes Satisfechos</div>

<div className="text-3xl font-bold text-cyan-400">85%</div>
<div className="text-indigo-300 text-sm">Tasa de Éxito</div>

<div className="text-3xl font-bold text-cyan-400">150+</div>
<div className="text-indigo-300 text-sm">Puntos Promedio</div>
```

---

### 2. **Cambiar Descripción del Servicio**

**Archivo:** `app/page.tsx`

Busca la sección `features` (~línea 32):

```tsx
const features = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Mejora tu Puntuación",
    description: "Incrementa tu score de crédito hasta 200+ puntos en 6 meses"
  },
  // ... más servicios
];
```

**Reemplaza:** `title` y `description` con tus servicios

---

### 3. **Cambiar Testimonios de Clientes**

**Archivo:** `app/page.tsx`

Busca la sección `testimonials` (~línea 46):

```tsx
const testimonials = [
  {
    name: "María García",
    role: "Propietaria de negocio",
    content: "¡Increíble! Mejoraron mi score en 150 puntos...",
    rating: 5
  },
  // ... más testimonios
];
```

**Cambios necesarios:**
- `name` → Nombre real del cliente
- `role` → Profesión o rol del cliente
- `content` → Testimonio completo entre comillas
- `rating` → 1-5 (número de estrellas)

---

### 4. **Cambiar Información de Contacto**

**Archivo:** `app/page.tsx`

Busca en el Footer (~línea 350):

```tsx
<li className="flex items-center gap-2">
  <Phone className="w-4 h-4 text-cyan-400" />
  +1 (555) 123-4567    {/* ← CAMBIA AQUÍ */}
</li>

<li className="flex items-center gap-2">
  <Mail className="w-4 h-4 text-cyan-400" />
  info@triexpertcredit.com    {/* ← CAMBIA AQUÍ */}
</li>

<li className="flex items-center gap-2">
  <MapPin className="w-4 h-4 text-cyan-400" />
  Miami, FL    {/* ← CAMBIA AQUÍ */}
</li>
```

---

### 5. **Cambiar Nombre de la Empresa**

**Archivo 1:** `app/page.tsx`

Busca `TriExpert Credit` y reemplaza por tu nombre:

```tsx
<Link href="/" className="text-2xl font-bold text-transparent...">
  TriExpert Credit    {/* ← CAMBIA AQUÍ */}
</Link>
```

**Archivo 2:** `app/onboarding/page.tsx`

```tsx
<h2 className="mt-6 text-center text-3xl font-extrabold...">
  Bienvenido a TriExpert Credit    {/* ← CAMBIA AQUÍ */}
</h2>
```

---

### 6. **Cambiar Descripción en Hero**

**Archivo:** `app/page.tsx`

Línea ~178:

```tsx
<p className="text-lg md:text-xl text-indigo-300 max-w-2xl mx-auto mb-12">
  Aumenta tu puntuación de crédito, elimina deudas incorrectas y accede 
  a mejores tasas de interés. Nuestros expertos certificados han ayudado 
  a más de 10,000 clientes.
  {/* ↑ CAMBIA TODO ESTO CON TU COPY */}
</p>
```

---

### 7. **Cambiar Preguntas del FAQ**

**Archivo:** `app/page.tsx`

Busca sección `faqs` (~línea 86):

```tsx
const faqs = [
  {
    question: "¿Cuánto tiempo toma mejorar mi crédito?",
    answer: "Los primeros cambios se ven en 30-60 días. Resultados significativos entre 3-6 meses."
  },
  // ... más preguntas
];
```

Reemplaza `question` y `answer` según tu contenido.

---

## 🎨 Cómo Cambiar Colores

**Archivo:** `tailwind.config.js`

```javascript
extend: {
  colors: {
    cyberpunk: {
      dark: '#0a0e27',    // ← Color de fondo oscuro
      cyan: '#06b6d4',    // ← Neón principal (turquesa)
      purple: '#8b5cf6',  // ← Acentos (morado)
      blue: '#3b82f6',    // ← Secundario (azul)
    },
  },
}
```

**Opciones de colores:**
- Cyan más claro: `#22d3ee`
- Cyan más oscuro: `#0891b2`
- Azul más claro: `#60a5fa`
- Morado más claro: `#a78bfa`

---

## 🔤 Cambiar Textos de Navbar

**Archivo:** `app/page.tsx`

Línea ~127 (Menu Desktop):

```tsx
<div className="hidden md:flex gap-8">
  <a href="#servicios" className="...">Servicios</a>
  <a href="#proceso" className="...">Proceso</a>
  <a href="#testimonios" className="...">Testimonios</a>
  <a href="#faq" className="...">FAQ</a>
  {/* ↑ CAMBIA ESTOS TEXTOS */}
</div>
```

---

## 📱 Cambiar Información del Formulario

**Archivo:** `app/onboarding/page.tsx`

Si necesitas agregar o quitar campos del formulario:

1. **Agrega nuevo campo al estado:**
```tsx
const [formData, setFormData] = useState({
  nombre: '', apellido: '', email: '', phone: '',
  ssn: '', dob: '', address: '', city: '', state: '', zip: '',
  // AGREGAR AQUÍ: tuCampo: ''
});
```

2. **Agrega input en el JSX:**
```tsx
<input 
  type="text" 
  placeholder="Tu Campo"
  onChange={(e) => setFormData({...formData, tuCampo: e.target.value})}
/>
```

3. **Agrega al FormData en handleSubmit:**
```tsx
data.append('tuCampo', formData.tuCampo);
```

---

## 🔗 Cambiar Links de Botones

Para cambiar a dónde lleva un botón:

```tsx
{/* Actual */}
<Link href="/onboarding" className="cyberpunk-button...">
  Auditoría Gratis
</Link>

{/* Para otro destino */}
<Link href="/tu-nueva-ruta" className="cyberpunk-button...">
  Auditoría Gratis
</Link>
```

---

## 🖼️ Agregar Logo

1. **Coloca tu logo** en `public/logo.png`

2. **En `app/page.tsx` línea ~121:**

```tsx
import Image from 'next/image';

{/* En el navbar */}
<Link href="/" className="flex items-center gap-2">
  <Image src="/logo.png" alt="Logo" width={32} height={32} />
  <span>TriExpert Credit</span>
</Link>
```

---

## 📧 Cambiar Email de Contacto en Footer

**Archivo:** `app/page.tsx`

Línea ~351:

```tsx
<li className="flex items-center gap-2">
  <Mail className="w-4 h-4 text-cyan-400" />
  tu-email@tudominio.com    {/* ← CAMBIA AQUÍ */}
</li>
```

---

## 🎯 Cambiar Headline Principal

**Archivo:** `app/page.tsx`

Línea ~177:

```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6...">
  Recupera Tu Libertad Financiera    {/* ← CAMBIA AQUÍ */}
</h1>
```

---

## ⚡ Cambiar Descripción Navbar

**Archivo:** `app/page.tsx`

Línea ~154:

```tsx
<span className="inline-flex items-center gap-2 px-4 py-2...">
  <Zap className="w-4 h-4 text-cyan-400" />
  <span className="text-sm text-cyan-300">
    Reparación de Crédito Legal    {/* ← CAMBIA AQUÍ */}
  </span>
</span>
```

---

## 🔄 Cambiar Año en Copyright

**Archivo:** `app/page.tsx`

Línea ~407:

```tsx
<p>© 2024 TriExpert Credit. Todos los derechos reservados.</p>
{/* Cambia 2024 por el año actual */}
```

---

## 🧪 Cómo Probar los Cambios

1. **Guarda los cambios** (Ctrl+S)
2. **El servidor recargará automáticamente**
3. **Refresca el navegador** (F5)
4. **Verifica el cambio** en la página

Si hay error, abre la **Consola** (F12) para ver el mensaje.

---

## 📋 Orden Recomendado de Edición

1. ✏️ Nombre de empresa (todos lados)
2. ✏️ Números principales (10k, 85%, 150+)
3. ✏️ Descripción hero y servicios
4. ✏️ Testimonios reales
5. ✏️ FAQ con tus preguntas
6. ✏️ Contacto (teléfono, email, ubicación)
7. ✏️ Logo
8. ✏️ Colores (opcional)

---

## 🎨 Cambiar Estilo de Botones

Si quieres cambiar todos los botones CTA:

**Archivo:** `app/globals.css`

```css
.cyberpunk-button {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  /* Cambiar gradientes aquí */
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.6), /* Cyan glow */
              0 0 40px rgba(59, 130, 246, 0.3); /* Blue glow */
}
```

---

## ⚠️ Cosas que NO cambiar

❌ No toques:
- Imports al principio del archivo
- Estructuras `const [...]`
- Funciones como `handleSubmit`
- Clases de Tailwind (a menos que sepas qué haces)
- Estructura de carpetas

---

## 🆘 Si Algo se Rompe

1. **Abre la consola** (F12 en navegador)
2. **Lee el error** (línea y descripción)
3. **Verifica** que no borraste comillas o paréntesis
4. **Ctrl+Z** para deshacer el cambio
5. **Recarga** la página (F5)

---

## 💾 Guardar Cambios en Git

Después de editar:

```bash
git add .
git commit -m "Actualizar contenido de landing page"
git push origin main
```

---

**¡Listo! Ahora tu landing page está personalizada.** 🚀

Para ayuda adicional, revisa:
- `IMPLEMENTACION_COMPLETA.md` - Documentación técnica
- `LANDING_PAGE.md` - Estructura detallada
