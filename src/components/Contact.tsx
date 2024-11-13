import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:websolutiondpro@gmail.com?subject=Contacto desde Web Solution Pro&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMensaje: ${formData.message}`;
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Estamos aquí para ayudarte con tu próximo proyecto
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="flex-shrink-0 h-6 w-6 text-blue-600" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <p className="mt-1 text-gray-500">websolutiondpro@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="flex-shrink-0 h-6 w-6 text-blue-600" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Teléfono</p>
                  <p className="mt-1 text-gray-500">Contáctanos por email para agendar una llamada</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="flex-shrink-0 h-6 w-6 text-blue-600" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Ubicación</p>
                  <p className="mt-1 text-gray-500">Servicios en línea a nivel global</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}