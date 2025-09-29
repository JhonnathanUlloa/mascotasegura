'use client';

import { useState } from 'react';

const Memorial = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'products' | 'support'>('info');

  const memorialProducts = [
    {
      name: 'Urnas de Madera',
      description: 'Elegantes urnas talladas en madera noble para conservar las cenizas de tu compañero',
      icon: '🪵',
      price: 'Desde $150,000'
    },
    {
      name: 'Urnas de Cerámica',
      description: 'Urnas artesanales de cerámica con diseños personalizados y acabados únicos',
      icon: '🏺',
      price: 'Desde $120,000'
    },
    {
      name: 'Urnas Ecológicas',
      description: 'Opciones biodegradables para un homenaje respetuoso con el medio ambiente',
      icon: '🌱',
      price: 'Desde $80,000'
    },
    {
      name: 'Joyas Conmemorativas',
      description: 'Colgantes y recuerdos que puedes llevar contigo para mantenerlo siempre cerca',
      icon: '💎',
      price: 'Desde $90,000'
    },
    {
      name: 'Huellas en Arcilla',
      description: 'Conserva para siempre la huella de sus patitas en arcilla o yeso',
      icon: '🐾',
      price: 'Desde $50,000'
    },
    {
      name: 'Placas Personalizadas',
      description: 'Placas conmemorativas grabadas con el nombre y fechas especiales',
      icon: '🏷️',
      price: 'Desde $70,000'
    }
  ];

  const supportResources = [
    {
      title: 'Guía del Duelo por Mascotas',
      description: 'Artículos y consejos para ayudarte a procesar la pérdida de tu compañero',
      icon: '📖',
      type: 'Artículo'
    },
    {
      title: 'Apoyo Psicológico Especializado',
      description: 'Contacto directo con psicólogos especializados en duelo por mascotas',
      icon: '🧠',
      type: 'Profesional'
    },
    {
      title: 'Hablar con los Niños',
      description: 'Cómo explicar y ayudar a los niños a entender la pérdida de una mascota',
      icon: '👨‍👩‍👧‍👦',
      type: 'Guía Familiar'
    },
    {
      title: 'Rituales de Despedida',
      description: 'Ideas para crear una ceremonia significativa en honor a tu mascota',
      icon: '🕯️',
      type: 'Ceremonial'
    }
  ];

  return (
    <section id="memorial" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            Memorial <span className="text-purple-600">Digital</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Un espacio sagrado para honrar la memoria de tu fiel compañero y recibir el apoyo que necesitas
          </p>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Navegación por pestañas */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-purple-100 flex flex-wrap">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'info'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              Memorial Digital
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'products'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              Productos
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'support'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              Apoyo Emocional
            </button>
          </div>
        </div>

        {/* Contenido del Memorial Digital */}
        {activeTab === 'info' && (
          <div className="space-y-12">
            {/* Información principal */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-800">
                    Un Homenaje Eterno para tu Compañero
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nuestro memorial digital te permite crear un espacio único y permanente para honrar 
                    la memoria de tu mascota, donde familia y amigos pueden compartir recuerdos y 
                    encontrar consuelo.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600">📸</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Galería de Recuerdos</h4>
                        <p className="text-slate-600 text-sm">Sube las fotos más especiales de tu mascota</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600">✍️</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Mensaje de Despedida</h4>
                        <p className="text-slate-600 text-sm">Escribe unas palabras para recordarlo siempre</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600">👥</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Comparte con Seres Queridos</h4>
                        <p className="text-slate-600 text-sm">Permite que otros dejen condolencias y recuerdos</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-8 text-white">
                    <div className="text-6xl mb-4">🌟</div>
                    <h4 className="text-xl font-bold mb-2">Memoria Eterna</h4>
                    <p className="text-purple-100">Un lugar sagrado para siempre</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Memorial */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Crea un Memorial
                </h3>
                <p className="text-purple-100 mb-6">
                  Honra la memoria de tu compañero con un espacio digital eterno
                </p>
                <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
                  <span>🌟</span>
                  <span>Crear Memorial</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contenido de Productos */}
        {activeTab === 'products' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Recuerdos Tangibles para Siempre
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Productos especiales para conservar la memoria de tu mascota de manera física y tangible
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {memorialProducts.map((product, index) => (
                <div
                  key={product.name}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                      <span className="text-3xl">{product.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800">{product.name}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>
                    <div className="pt-4 border-t border-purple-100">
                      <p className="text-purple-600 font-bold text-lg">{product.price}</p>
                      <button className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                        Más Información
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-purple-100">
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  ¿Necesitas algo personalizado?
                </h4>
                <p className="text-slate-600 mb-6">
                  Podemos crear productos únicos y personalizados para honrar a tu mascota
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200">
                  Solicitar Personalización
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contenido de Apoyo Emocional */}
        {activeTab === 'support' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Porque entendemos lo que sientes
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Te ofrecemos recursos especializados para sobrellevar el duelo y encontrar paz en este momento difícil
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {supportResources.map((resource, index) => (
                <div
                  key={resource.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{resource.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-lg font-bold text-slate-800">{resource.title}</h4>
                        <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-medium">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-4">{resource.description}</p>
                      <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-2 transition-colors duration-200">
                        <span>Acceder Ahora</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 max-w-2xl mx-auto border border-purple-100">
                <div className="text-4xl mb-4">💜</div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  No estás solo en este proceso
                </h4>
                <p className="text-slate-600 mb-6">
                  Nuestro equipo de apoyo está disponible 24/7 para brindarte el acompañamiento que necesitas
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                    Hablar con Especialista
                  </button>
                  <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200">
                    Línea de Apoyo 24/7
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Memorial;