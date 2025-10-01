import Image from 'next/image';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Elige tu plan',
      description: 'Compara nuestras opciones de membresía y seguros, y selecciona el que mejor se adapte a tus necesidades.',
      icon: '🎯',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'Registra a tu mascota',
      description: 'Completa el perfil de tu compañero con sus datos básicos e historial médico.',
      icon: '📝',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      number: '03',
      title: 'Activa tus beneficios',
      description: 'Una vez inscrito, tendrás acceso inmediato a nuestra línea 24/7 y a toda nuestra red de servicios.',
      icon: '✅',
      color: 'from-amber-500 to-amber-600'
    },
    {
      number: '04',
      title: 'Usa la plataforma',
      description: 'En caso de emergencia, contáctanos. Si necesitas un reembolso, nosotros gestionamos el reclamo. ¡Así de fácil!',
      icon: '🚀',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            ¿Cómo <span className="text-emerald-600">Funciona?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proceso paso a paso para proteger a tu mascota de forma rápida y sencilla
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline de pasos */}
        <div className="relative max-w-6xl mx-auto">
          {/* Línea conectora - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-emerald-200 via-amber-200 to-purple-200 rounded-full mx-16"></div>
          
          {/* Línea conectora - Mobile */}
          <div className="lg:hidden absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-emerald-200 via-amber-200 to-purple-200 rounded-full"></div>

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-6 relative">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex lg:flex-col items-start lg:items-center">
                {/* Número del paso - Círculo */}
                <div className="flex-shrink-0 lg:mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10`}>
                    {step.number}
                  </div>
                </div>

                {/* Contenido del paso */}
                <div className="ml-6 lg:ml-0 flex-1">
                  <div className="text-left lg:text-center">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 max-w-4xl mx-auto border border-emerald-100">
            <div className="space-y-6">
              <div className="text-6xl">⚡</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">
                ¡Es así de simple!
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                En menos de 10 minutos tendrás a tu mascota protegida con el mejor servicio de atención veterinaria 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
                  <Image 
                    src="/recursos/contact-icon.svg" 
                    alt="Comenzar" 
                    width={20} 
                    height={20}
                    className="filter invert"
                  />
                  <span>Comenzar</span>
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                  <Image 
                    src="/recursos/whatsapp-icon.svg" 
                    alt="Chat" 
                    width={20} 
                    height={20}
                  />
                  <span>Chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios adicionales */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-3xl">⚡</span>
            </div>
            <h4 className="text-lg font-bold text-slate-800">Activación Inmediata</h4>
            <p className="text-slate-600">
              Tu membresía se activa al instante y puedes usar los servicios de inmediato
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-3xl">🔄</span>
            </div>
            <h4 className="text-lg font-bold text-slate-800">Sin Complicaciones</h4>
            <p className="text-slate-600">
              Nosotros nos encargamos de toda la gestión y trámites por ti
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-3xl">🎯</span>
            </div>
            <h4 className="text-lg font-bold text-slate-800">Personalizado</h4>
            <p className="text-slate-600">
              Cada plan se adapta a las necesidades específicas de tu mascota
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;