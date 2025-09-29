'use client';

import { useState } from 'react';

interface PlanFeature {
  name: string;
  description: string;
  icon: string;
  ideal: string;
}

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState<'membership' | 'insurance'>('membership');

  const membershipFeatures: PlanFeature[] = [
    {
      name: 'Asistencia 24/7',
      description: 'Acceso a nuestra línea de emergencia para orientación veterinaria telefónica y coordinación de servicios a cualquier hora.',
      icon: '🚨',
      ideal: 'Atención inmediata y orientación profesional.'
    },
    {
      name: 'Coordinación Veterinaria',
      description: 'Gestionamos citas y emergencias con nuestra red de clínicas y veterinarios afiliados para agilizar la atención.',
      icon: '🏥',
      ideal: 'Dueños que buscan una gestión simple y rápida.'
    },
    {
      name: 'Gestión de Reclamos',
      description: 'Te ayudamos a tramitar toda la documentación y seguimiento con las aseguradoras aliadas para el reembolso de gastos.',
      icon: '📋',
      ideal: 'Ahorrar tiempo y evitar procesos complejos.'
    },
    {
      name: 'Carnet / Registro Digital',
      description: 'Un perfil online para tu mascota con su historial médico, carnet de vacunación y datos de contacto de emergencia.',
      icon: '📱',
      ideal: 'Tener toda la información importante en un solo lugar.'
    },
    {
      name: 'Apoyo en Despedida',
      description: 'Cubrimos la coordinación del servicio de cremación o sepultura, brindándote acompañamiento en momentos difíciles.',
      icon: '🕊️',
      ideal: 'Tranquilidad en las situaciones más delicadas.'
    }
  ];

  const insuranceCompanies = [
    { name: 'SURA', logo: '🏢', color: 'bg-red-500' },
    { name: 'Seguros Bolívar', logo: '🏛️', color: 'bg-blue-500' },
    { name: 'Alfa', logo: '🏪', color: 'bg-green-500' },
    { name: 'Liberty', logo: '🏬', color: 'bg-purple-500' },
  ];

  return (
    <section id="planes" className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            Nuestros <span className="text-emerald-600">Planes y Cobertura</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Servicios incluidos en la membresía y opciones de pólizas de seguro con las mejores aseguradoras
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Selector de pestañas */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-emerald-100">
            <button
              onClick={() => setSelectedPlan('membership')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedPlan === 'membership'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              Servicio de Membresía
            </button>
            <button
              onClick={() => setSelectedPlan('insurance')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedPlan === 'insurance'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              Pólizas de Seguro
            </button>
          </div>
        </div>

        {/* Contenido de Membresía */}
        {selectedPlan === 'membership' && (
          <div className="space-y-8">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {membershipFeatures.map((feature, index) => (
                <div
                  key={feature.name}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.name}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
                      <div className="bg-emerald-50 rounded-lg p-3 border-l-4 border-emerald-500">
                        <p className="text-sm font-semibold text-emerald-700">
                          💡 Ideal para: {feature.ideal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA de membresía */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-emerald-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  ¿Listo para proteger a tu mascota?
                </h3>
                <p className="text-slate-600 mb-6">
                  Obtén acceso inmediato a todos nuestros servicios de membresía
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>🎯</span>
                    <span>Comenzar Ahora</span>
                  </button>
                  <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2">
                    <span>💬</span>
                    <span>Hablar con Asesor</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contenido de Seguros */}
        {selectedPlan === 'insurance' && (
          <div className="space-y-12">
            {/* Información de seguros */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-800">
                    Pólizas con Aseguradoras Aliadas
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ofrecemos pólizas de seguros para mascotas en alianza con las mejores compañías del país.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-700">Cobertura para accidentes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-700">Protección por enfermedades</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-700">Responsabilidad civil</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-700">Atención veterinaria</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl p-8 text-white">
                    <div className="text-6xl mb-4">🛡️</div>
                    <h4 className="text-xl font-bold mb-2">Protección Completa</h4>
                    <p className="text-emerald-100">Para tu mascota y tu tranquilidad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aseguradoras aliadas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
                Nuestras Aseguradoras Aliadas
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {insuranceCompanies.map((company, index) => (
                  <div
                    key={company.name}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-emerald-100"
                  >
                    <div className={`w-16 h-16 ${company.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-3xl text-white">{company.logo}</span>
                    </div>
                    <h4 className="font-bold text-slate-800">{company.name}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA de seguros */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Cotiza tu Seguro Ahora
                </h3>
                <p className="text-emerald-100 mb-6">
                  Obtén una cotización personalizada con nuestras aseguradoras aliadas
                </p>
                <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
                  <span>💰</span>
                  <span>Cotizar Seguro Ahora</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Plans;