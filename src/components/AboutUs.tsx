import Image from 'next/image';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Oscar Bracho',
      role: 'Director de Servicios',
      description: 'Especialista en gestión de servicios de salud y coordinación de redes médicas.',
      avatar: '/recursos/team-director.svg',
      expertise: ['Gestión de Servicios', 'Coordinación', 'Atención al Cliente']
    },
    {
      name: 'Jhonnathan Ulloa',
      role: 'Director Técnico',
      description: 'Experto en desarrollo de soluciones tecnológicas para el sector veterinario.',
      avatar: '/recursos/team-tech.svg',
      expertise: ['Desarrollo Web', 'Innovación', 'Tecnología']
    },
    {
      name: 'Jose Rodriguez',
      role: 'Coordinador de Seguros',
      description: 'Experto en seguros para mascotas con amplia experiencia en el sector asegurador.',
      avatar: '/recursos/team-insurance.svg',
      expertise: ['Seguros', 'Reclamos', 'Asesoría Legal']
    },
    {
      name: 'Jeyson Rueda',
      role: 'Especialista en Atención al Cliente',
      description: 'Profesional dedicado al soporte y bienestar de nuestros clientes y sus mascotas.',
      avatar: '/recursos/team-support.svg',
      expertise: ['Atención al Cliente', 'Soporte', 'Comunicación']
    }
  ];

  const values = [
    {
      title: 'Amor por los Animales',
      description: 'Cada decisión la tomamos pensando en el bienestar y felicidad de las mascotas.',
      icon: '❤️',
      color: 'from-red-400 to-pink-500'
    },
    {
      title: 'Transparencia Total',
      description: 'Información clara, procesos transparentes y comunicación honesta siempre.',
      icon: '🔍',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Disponibilidad 24/7',
      description: 'Porque las emergencias no tienen horario, nosotros tampoco.',
      icon: '⏰',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Excelencia en Servicio',
      description: 'Buscamos constantemente superar las expectativas de nuestros clientes.',
      icon: '⭐',
      color: 'from-amber-400 to-orange-500'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Fundación de Mi Mascota Segura', icon: '🏢' },
    { year: '2021', event: 'Primera alianza con SURA', icon: '🤝' },
    { year: '2022', event: '100+ mascotas protegidas', icon: '🎯' },
    { year: '2023', event: 'Expansión a nivel nacional', icon: '🌍' },
    { year: '2024', event: '500+ familias satisfechas', icon: '🎉' }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            Sobre <span className="text-blue-600">Nosotros</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conoce la historia, misión y el equipo que hace posible tu tranquilidad
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="mb-20">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-blue-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">
                  Nuestra Historia
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  <strong>Mi Mascota Segura</strong> nació de una experiencia personal dolorosa. 
                  Cuando nuestro fundador perdió a su perro Max debido a la dificultad para acceder 
                  a atención veterinaria de emergencia en horarios nocturnos, se dio cuenta de que 
                  muchas familias enfrentaban el mismo problema.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Decidimos crear una plataforma que no solo brindara acceso inmediato a cuidado 
                  veterinario, sino que también simplificara todos los procesos relacionados con 
                  el bienestar y protección de las mascotas.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-blue-700 font-medium">
                    💡 "Nuestro propósito es que ninguna familia vuelva a sentir la impotencia 
                    de no saber a quién recurrir cuando su mascota más lo necesita."
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl p-8 text-white">
                  <div className="text-6xl mb-4">🏠</div>
                  <h4 className="text-xl font-bold mb-2">Desde 2020</h4>
                  <p className="text-blue-100">Protegiendo mascotas colombianas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Nuestra Misión</h3>
              <p className="text-slate-600 leading-relaxed">
                Brindar tranquilidad y protección integral a las familias colombianas a través 
                de servicios veterinarios de calidad, disponibles 24/7, y un acompañamiento 
                cercano en cada etapa de la vida de sus mascotas.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔮</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Nuestra Visión</h3>
              <p className="text-slate-600 leading-relaxed">
                Ser la plataforma líder en Latinoamérica para el cuidado y protección de mascotas, 
                reconocida por nuestra excelencia en servicio, innovación tecnológica y 
                compromiso genuino con el bienestar animal.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Nuestro Compromiso</h3>
              <p className="text-slate-600 leading-relaxed">
                Tratamos a cada mascota como si fuera nuestra propia familia. Nuestro compromiso 
                va más allá de un servicio; es una promesa de estar ahí cuando más nos necesiten, 
                con calidad humana y profesional.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 text-center"
              >
                <div className={'w-16 h-16 bg-gradient-to-br ' + value.color + ' rounded-2xl flex items-center justify-center mx-auto mb-4'}>
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 text-center mb-12">
            Nuestros Hitos
          </h3>
          <div className="relative max-w-6xl mx-auto">
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-full mx-12"></div>
            
            <div className="lg:hidden absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 rounded-full"></div>

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-4 relative">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex lg:flex-col items-start lg:items-center">
                  <div className="flex-shrink-0 lg:mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg relative z-10">
                      <span className="text-xs">{milestone.year}</span>
                    </div>
                  </div>

                  <div className="ml-6 lg:ml-0 flex-1">
                    <div className="text-left lg:text-center">
                      <div className="text-3xl mb-2">{milestone.icon}</div>
                      <p className="text-slate-700 font-medium text-sm leading-relaxed">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 text-center mb-12">
            Nuestro Equipo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 text-center"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600 p-2">
                  <Image 
                    src={member.avatar} 
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{member.description}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full m-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres ser parte de nuestra familia?
            </h3>
            <p className="text-blue-100 mb-6">
              Únete a cientos de familias que ya confían en nosotros para cuidar de sus mascotas
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
              <span>🐾</span>
              <span>Conocer Nuestros Planes</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
