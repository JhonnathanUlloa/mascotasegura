'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    serviceType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      petName: '',
      petType: '',
      serviceType: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      title: 'Emergencias 24/7',
      subtitle: 'Línea directa de emergencias',
      contact: '300 XXX XXXX',
      icon: '🚨',
      color: 'from-red-500 to-red-600',
      action: 'Llamar Ahora',
      href: 'tel:300XXXXXXX'
    },
    {
      title: 'WhatsApp',
      subtitle: 'Respuesta inmediata',
      contact: '300 XXX XXXX',
      icon: '💬',
      color: 'from-green-500 to-green-600',
      action: 'Chatear',
      href: 'https://wa.me/573XXXXXXXXX'
    },
    {
      title: 'Email',
      subtitle: 'Consultas y cotizaciones',
      contact: 'contacto@mimascotasegura.com',
      icon: '📧',
      color: 'from-blue-500 to-blue-600',
      action: 'Enviar Email',
      href: 'mailto:contacto@mimascotasegura.com'
    },
    {
      title: 'Oficina Principal',
      subtitle: 'Bogotá, Colombia',
      contact: 'Calle 123 #45-67',
      icon: '📍',
      color: 'from-purple-500 to-purple-600',
      action: 'Ver Ubicación',
      href: 'https://maps.google.com'
    }
  ];

  const serviceTypes = [
    'Consulta general',
    'Cotización de membresía',
    'Información de seguros',
    'Soporte técnico',
    'Memorial digital',
    'Reclamos',
    'Otro'
  ];

  const petTypes = [
    'Perro',
    'Gato',
    'Ave',
    'Conejo',
    'Otro'
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            <span className="text-emerald-600">Contacto</span> Rápido
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estamos aquí para ti las 24 horas del día. Elige la forma más cómoda de contactarnos
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Métodos de contacto rápido */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <span className="text-3xl text-white">{method.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{method.title}</h3>
              <p className="text-slate-600 text-sm mb-2">{method.subtitle}</p>
              <p className="text-slate-700 font-medium text-sm mb-4">{method.contact}</p>
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                className={`inline-block bg-gradient-to-r ${method.color} text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg`}
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Envíanos un Mensaje
              </h3>
              <p className="text-slate-600">
                Completa el formulario y te contactaremos en menos de 2 horas
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información personal */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200"
                  placeholder="300 XXX XXXX"
                />
              </div>

              {/* Información de la mascota */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="petName" className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre de tu mascota
                  </label>
                  <input
                    type="text"
                    id="petName"
                    name="petName"
                    value={formData.petName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Nombre de tu mascota"
                  />
                </div>
                <div>
                  <label htmlFor="petType" className="block text-sm font-medium text-slate-700 mb-2">
                    Tipo de mascota
                  </label>
                  <select
                    id="petType"
                    name="petType"
                    value={formData.petType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Selecciona</option>
                    {petTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">
                  Tipo de consulta *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Selecciona el tipo de consulta</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>📤</span>
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Información adicional */}
          <div className="space-y-8">
            {/* Horarios de atención */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
                <span>⏰</span>
                <span>Horarios de Atención</span>
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-emerald-100">
                  <span className="text-slate-700">Emergencias</span>
                  <span className="font-semibold text-emerald-600">24/7</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-emerald-100">
                  <span className="text-slate-700">WhatsApp</span>
                  <span className="font-semibold text-emerald-600">24/7</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-emerald-100">
                  <span className="text-slate-700">Oficina</span>
                  <span className="font-semibold text-slate-700">Lun - Vie: 8AM - 6PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-700">Email</span>
                  <span className="font-semibold text-slate-700">Respuesta en 2-4 horas</span>
                </div>
              </div>
            </div>

            {/* Mapa placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
                <span>📍</span>
                <span>Nuestra Ubicación</span>
              </h3>
              <div className="bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg p-8 text-center text-white">
                <div className="text-4xl mb-4">🗺️</div>
                <h4 className="text-lg font-bold mb-2">Oficina Principal</h4>
                <p className="text-emerald-100 mb-4">
                  Calle 123 #45-67<br />
                  Bogotá, Colombia
                </p>
                <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                  Ver en Google Maps
                </button>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
                <span>🌐</span>
                <span>Síguenos</span>
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-200"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-200"
                >
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Garantía de respuesta */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 shadow-lg text-white text-center">
          <div className="text-5xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold mb-4">Garantía de Respuesta</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Nos comprometemos a responder tu consulta en menos de 2 horas durante horario laboral, 
            y en menos de 30 minutos para emergencias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <div className="font-bold">Emergencias</div>
              <div className="text-sm">30 minutos</div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <div className="font-bold">Consultas</div>
              <div className="text-sm">2 horas</div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <div className="font-bold">Cotizaciones</div>
              <div className="text-sm">4 horas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;