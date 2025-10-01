import Image from 'next/image';

const GoogleMap = () => {

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Nuestra Ubicación
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nos encontramos en el corazón de Barrancabermeja, listos para atender 
              a tu mascota las 24 horas del día, los 7 días de la semana.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Mapa */}
            <div className="relative">
              <div className="w-full h-96 rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2!2d-73.8506!3d7.0653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDMnNTUuMSJOIDczwrA1MScwMi4yIlc!5e0!3m2!1ses!2sco!4v1000000000000!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Mi Mascota Segura - Barrancabermeja"
                ></iframe>
              </div>
              
              {/* Fallback - Enlace directo a Google Maps */}
              <a
                href="https://maps.google.com/?q=7.0653,-73.8506"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-700 px-3 py-2 rounded-lg shadow-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <Image 
                  src="/recursos/location-icon.svg" 
                  alt="Ubicación" 
                  width={16} 
                  height={16}
                />
                <span>Ver en Google Maps</span>
              </a>
            </div>

            {/* Información de contacto */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Image 
                        src="/recursos/location-icon.svg" 
                        alt="Ubicación" 
                        width={20} 
                        height={20}
                        className="text-emerald-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Dirección</h4>
                      <p className="text-slate-600">Cl. 58 #29-57-1</p>
                      <p className="text-slate-600">Barrancabermeja, Santander</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Image 
                        src="/recursos/phone-icon.svg" 
                        alt="Teléfono" 
                        width={20} 
                        height={20}
                        className="text-red-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Emergencias 24/7</h4>
                      <p className="text-slate-600 mb-2">Atención inmediata cualquier día del año</p>
                      <a
                        href="tel:+573214349583"
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 inline-block"
                      >
                        Emergencia
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Image 
                        src="/recursos/whatsapp-icon.svg" 
                        alt="WhatsApp" 
                        width={20} 
                        height={20}
                        className="text-green-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">WhatsApp</h4>
                      <p className="text-slate-600 mb-2">Consultas y citas por WhatsApp</p>
                      <a
                        href="https://wa.me/573214349583"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 inline-block"
                      >
                        Chat
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Image 
                        src="/recursos/email-icon.svg" 
                        alt="Email" 
                        width={20} 
                        height={20}
                        className="text-blue-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                      <p className="text-slate-600">contacto@mimascotasegura.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Image 
                        src="/recursos/clock-icon.svg" 
                        alt="Horarios" 
                        width={20} 
                        height={20}
                        className="text-amber-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Horarios</h4>
                      <p className="text-slate-600">Lunes a Domingo: 24 horas</p>
                      <p className="text-slate-500 text-sm">Servicios de emergencia siempre disponibles</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Servicios destacados */}
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <h4 className="font-bold text-emerald-800 mb-4">Servicios Principales</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-600">•</span>
                    <span className="text-emerald-700">Emergencias 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-600">•</span>
                    <span className="text-emerald-700">Consultas veterinarias</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-600">•</span>
                    <span className="text-emerald-700">Seguros para mascotas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-600">•</span>
                    <span className="text-emerald-700">Memorial digital</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;