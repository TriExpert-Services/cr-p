'use client';

import { useState } from 'react';
import { Upload, User, MapPin, ShieldCheck, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function OnboardingForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = useState({
    nombre: '', apellido: '', email: '', phone: '',
    ssn: '', dob: '', address: '', city: '', state: '', zip: ''
  });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    // Validación básica
    if (!formData.nombre || !formData.apellido || !formData.email) {
      setMessage({ type: 'error', text: 'Por favor completa los campos obligatorios.' });
      setLoading(false);
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key as keyof typeof formData]));
    if (file) data.append('reporte', file);

    try {
      console.log('Enviando formulario...');
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: data,
      });

      console.log('Respuesta:', response.status, response.statusText);
      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: result.message });
        // Limpiar formulario
        setFormData({
          nombre: '', apellido: '', email: '', phone: '',
          ssn: '', dob: '', address: '', city: '', state: '', zip: ''
        });
        setFile(null);
        setTimeout(() => setMessage(null), 5000);
      } else {
        setMessage({ type: 'error', text: result.message || `Error: ${response.status}` });
        console.error('Error del servidor:', result);
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Error desconocido';
      setMessage({ type: 'error', text: `Error de conexión: ${errorMsg}` });
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Bienvenido a TriExpert Credit
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Completa tus datos para iniciar la auditoría legal.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          
          {/* Mensajes de éxito/error */}
          {message && (
            <div className={`mb-6 p-4 rounded-md flex items-center gap-3 ${
              message.type === 'success' 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              {message.type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600" />
              )}
              <span className={message.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                {message.text}
              </span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* SECCIÓN 1: DATOS PERSONALES */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" required 
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Apellido</label>
                <input type="text" required 
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 border px-3"
                  onChange={(e) => setFormData({...formData, apellido: e.target.value})}
                />
              </div>
            </div>

            {/* SECCIÓN 2: CONTACTO Y SEGURIDAD */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required 
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 border px-3"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                <input type="tel" required 
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 border px-3"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div>
                <label className="block text-sm font-medium text-gray-700">SSN (Últimos 4)</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ShieldCheck className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" maxLength={4} required placeholder="XXXX"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                    onChange={(e) => setFormData({...formData, ssn: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Fecha Nacimiento</label>
                <input type="date" required 
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 border px-3"
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                />
              </div>
            </div>

            {/* SECCIÓN 3: DIRECCIÓN */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Dirección Completa</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" required placeholder="123 Calle Principal"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <input type="text" placeholder="Ciudad" required className="border-gray-300 rounded-md py-2 border px-3 text-sm" onChange={(e) => setFormData({...formData, city: e.target.value})} />
              <input type="text" placeholder="Estado" required className="border-gray-300 rounded-md py-2 border px-3 text-sm" onChange={(e) => setFormData({...formData, state: e.target.value})} />
              <input type="text" placeholder="Zip" required className="border-gray-300 rounded-md py-2 border px-3 text-sm" onChange={(e) => setFormData({...formData, zip: e.target.value})} />
            </div>

            {/* SECCIÓN 4: SUBIDA DE ARCHIVOS (REPORTES) */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">Sube tu Reporte de Crédito (PDF)</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:bg-gray-50 transition">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                      <span>Sube un archivo</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf" 
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                      />
                    </label>
                    <p className="pl-1">o arrástralo aquí</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF hasta 10MB</p>
                  {file && <p className="text-sm text-green-600 font-bold">Seleccionado: {file.name}</p>}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
                {loading ? <><Loader2 className="animate-spin mr-2"/> Procesando...</> : 'Enviar y Analizar Crédito'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
