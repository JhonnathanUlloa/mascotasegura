import Link from 'next/link';

const Welcome = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Título principal */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
              Bienvenido a <span className="text-emerald-600">Mi Mascota Segura</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* Contenido principal */}
          <div className="space-y-6">
            <p className="text-lg lg:text-xl text-slate-700 leading-relaxed">
              En <strong className="text-emerald-600">Mi Mascota Segura</strong> entendemos que tu mascota es parte 
              indispensable de tu familia. Por eso, hemos creado una plataforma que te brinda la tranquilidad de 
              saber que estarán protegidos ante cualquier imprevisto.
            </p>
            
            <p className="text-lg lg:text-xl text-slate-700 leading-relaxed">
              Ofrecemos una <strong>membresía integral</strong> con asistencia 24/7 y alianzas con las mejores 
              aseguradoras para que solo te preocupes por disfrutar de su compañía.
            </p>
          </div>

          {/* Características destacadas */}
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Protección Total</h3>
              <p className="text-slate-600">
                Cobertura completa para tu mascota en cada etapa de su vida
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Disponibilidad 24/7</h3>
              <p className="text-slate-600">
                Atención inmediata cuando más lo necesites, cualquier día del año
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Con Amor</h3>
              <p className="text-slate-600">
                Tratamos a tu mascota como parte de nuestra propia familia
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-12">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                ¿Listo para darle la protección que merece?
              </h3>
              <p className="text-slate-600 mb-6">
                Únete a cientos de familias que ya confían en nosotros
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/planes"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
                >
                  Conocer Planes
                </Link>
                <Link
                  href="/contacto"
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200"
                >
                  Hablar con Experto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;