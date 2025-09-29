'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'membership' | 'insurance' | 'emergency' | 'claims' | 'general';
}

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqItems: FAQItem[] = [
    {
      question: '¿Qué cubre exactamente la membresía de Mi Mascota Segura?',
      answer: 'Nuestra membresía incluye: asistencia veterinaria telefónica 24/7, coordinación con clínicas afiliadas, gestión completa de reclamos de seguros, carnet digital con historial médico, y apoyo en servicios de despedida. También tienes acceso prioritario a nuestro memorial digital y productos conmemorativos.',
      category: 'membership'
    },
    {
      question: '¿Cómo funciona el convenio con las aseguradoras? ¿Yo elijo la póliza?',
      answer: 'Sí, tú eliges la aseguradora y el tipo de póliza que mejor se adapte a tus necesidades y presupuesto. Nosotros tenemos convenios con SURA, Seguros Bolívar, Alfa, Liberty y otras compañías reconocidas. Te ayudamos con la cotización, comparación de planes y gestión completa del proceso.',
      category: 'insurance'
    },
    {
      question: '¿Puedo llevar a mi mascota a mi veterinario de confianza?',
      answer: 'Por supuesto. Respetamos tu relación con tu veterinario de confianza. Nuestro servicio incluye coordinación con cualquier clínica veterinaria, no solo las afiliadas. Si ya tienes un veterinario, trabajamos con ellos para agilizar citas y trámites.',
      category: 'general'
    },
    {
      question: '¿Qué debo hacer en caso de una emergencia?',
      answer: 'En caso de emergencia, llama inmediatamente a nuestra línea 24/7: 300 XXX XXXX. Nuestro equipo te brindará orientación telefónica inmediata, coordinará con la clínica más cercana o tu veterinario de confianza, y si es necesario, activará el protocolo de seguro para cubrir los gastos.',
      category: 'emergency'
    },
    {
      question: '¿Cómo y cuándo se realizan los reembolsos o reclamos?',
      answer: 'Nosotros gestionamos todo el proceso de reclamos por ti. Solo necesitas enviarnos las facturas y documentos médicos. Nuestro equipo se encarga de tramitar con la aseguradora y hacer seguimiento hasta que recibas tu reembolso. El tiempo promedio es de 15-30 días hábiles dependiendo de la aseguradora.',
      category: 'claims'
    },
    {
      question: '¿Existen periodos de carencia o preexistencias que deba conocer?',
      answer: 'Los periodos de carencia dependen de cada aseguradora y tipo de cobertura. Generalmente son de 30 días para accidentes y 60-90 días para enfermedades. Las condiciones preexistentes no son cubiertas. Te explicamos detalladamente todas las condiciones antes de contratar cualquier póliza.',
      category: 'insurance'
    },
    {
      question: '¿Cuánto cuesta la membresía y hay planes diferentes?',
      answer: 'Ofrecemos diferentes planes de membresía adaptados a tus necesidades: Plan Básico ($50,000/mes), Plan Completo ($85,000/mes), y Plan Premium ($120,000/mes). Cada plan incluye diferentes niveles de cobertura y servicios adicionales. Las pólizas de seguro tienen costos separados según la aseguradora elegida.',
      category: 'membership'
    },
    {
      question: '¿Qué pasa si mi mascota ya está enferma o es de edad avanzada?',
      answer: 'Nuestra membresía no tiene restricciones de edad o condiciones preexistentes. Todos los servicios de coordinación, asistencia 24/7 y gestión están disponibles. Para las pólizas de seguro, cada aseguradora tiene sus propias políticas sobre edad y condiciones preexistentes, pero te ayudamos a encontrar la mejor opción disponible.',
      category: 'general'
    },
    {
      question: '¿Cómo cancelo o modifico mi membresía?',
      answer: 'Puedes cancelar o modificar tu membresía en cualquier momento sin penalizaciones. Solo necesitas avisar con 30 días de anticipación. Ofrecemos pausas temporales si viajas o tienes circunstancias especiales. Nuestro objetivo es adaptarnos a tus necesidades.',
      category: 'membership'
    },
    {
      question: '¿El servicio está disponible en toda Colombia?',
      answer: 'Sí, nuestro servicio de asistencia 24/7 y gestión de reclamos está disponible en todo el territorio nacional. Tenemos veterinarios afiliados en las principales ciudades y coordinamos servicios en municipios más pequeños a través de nuestra red de contactos veterinarios.',
      category: 'general'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas', icon: '📋' },
    { id: 'membership', name: 'Membresía', icon: '🎯' },
    { id: 'insurance', name: 'Seguros', icon: '🛡️' },
    { id: 'emergency', name: 'Emergencias', icon: '🚨' },
    { id: 'claims', name: 'Reclamos', icon: '📄' },
    { id: 'general', name: 'General', icon: '❓' }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            Preguntas <span className="text-emerald-600">Frecuentes</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre nuestros servicios y membresías
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Lista de preguntas */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-emerald-100/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-800 pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white transition-transform duration-300 ${
                  activeQuestion === index ? 'rotate-45' : ''
                }`}>
                  <span className="text-lg font-bold">+</span>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                activeQuestion === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="bg-white rounded-xl p-4 border-l-4 border-emerald-500">
                    <p className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas rápidas */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-emerald-600">&lt; 5 min</div>
              <div className="text-slate-600">Tiempo de respuesta promedio</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-emerald-600">24/7</div>
              <div className="text-slate-600">Disponibilidad de soporte</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl mb-2">💬</div>
              <div className="text-2xl font-bold text-emerald-600">98%</div>
              <div className="text-slate-600">Consultas resueltas</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-emerald-100">
            <div className="text-5xl mb-4">🤔</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              ¿No encuentras la respuesta que buscas?
            </h3>
            <p className="text-slate-600 mb-6">
              Nuestro equipo de expertos está disponible 24/7 para resolver todas tus dudas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>💬</span>
                <span>Chat en Vivo</span>
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>📱</span>
                <span>WhatsApp</span>
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2">
                <span>📧</span>
                <span>Email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;