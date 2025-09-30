'use client';

import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'María P.',
      location: 'Bogotá',
      pet: 'Max (Golden Retriever)',
      rating: 5,
      text: 'La emergencia con mi perro fue de madrugada y Mi Mascota Segura coordinó todo con la clínica al instante. Su servicio 24/7 es real y eficiente. ¡Totalmente recomendados!',
      avatar: '👩‍💼',
      petPhoto: '🐶',
      service: 'Emergencia 24/7'
    },
    {
      name: 'Carlos R.',
      location: 'Medellín',
      pet: 'Luna (Gato Persa)',
      rating: 5,
      text: 'Gracias a su gestión, el reclamo del seguro fue aprobado sin problemas. Me ahorraron mucho tiempo y estrés. Por fin una empresa que se preocupa de verdad.',
      avatar: '👨‍💻',
      petPhoto: '🐱',
      service: 'Gestión de Reclamos'
    },
    {
      name: 'Ana Sofía M.',
      location: 'Cali',
      pet: 'Toby (Beagle)',
      rating: 5,
      text: 'El memorial digital que crearon para Toby nos ayudó mucho en el proceso de duelo. Es hermoso poder tener un lugar donde recordarlo siempre.',
      avatar: '👩‍🦰',
      petPhoto: '🐶',
      service: 'Memorial Digital'
    },
    {
      name: 'Roberto L.',
      location: 'Barranquilla',
      pet: 'Princesa (Yorkshire)',
      rating: 5,
      text: 'La coordinación veterinaria es excelente. Consiguieron cita de emergencia en menos de 30 minutos. El servicio es tal como lo prometen.',
      avatar: '👨‍🦲',
      petPhoto: '🐶',
      service: 'Coordinación Veterinaria'
    },
    {
      name: 'Claudia V.',
      location: 'Cartagena',
      pet: 'Simón (Mestizo)',
      rating: 5,
      text: 'El apoyo emocional que recibimos fue fundamental. Los psicólogos especializados realmente entienden el vínculo que tenemos con nuestras mascotas.',
      avatar: '👩‍🎓',
      petPhoto: '🐶',
      service: 'Apoyo Emocional'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            Lo que dicen nuestros <span className="text-amber-600">Clientes</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Testimonios reales de familias que han confiado en nosotros para cuidar de sus mascotas
          </p>
                              <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Testimonial principal */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-amber-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Cliente info */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-4xl mx-auto lg:mx-0 mb-4">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2">
                    {testimonials[activeTestimonial].location}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start space-x-1 mb-2">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                  <div className="bg-emerald-100 rounded-lg px-3 py-1 inline-block">
                    <span className="text-emerald-700 text-sm font-medium">
                      {testimonials[activeTestimonial].service}
                    </span>
                  </div>
                </div>

                {/* Testimonio */}
                <div className="flex-1">
                  <div className="text-6xl text-amber-200 mb-4">"</div>
                  <blockquote className="text-lg lg:text-xl text-slate-700 leading-relaxed italic mb-6">
                    {testimonials[activeTestimonial].text}
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{testimonials[activeTestimonial].petPhoto}</span>
                    <span className="text-slate-600 font-medium">
                      {testimonials[activeTestimonial].pet}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores y navegación */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'bg-emerald-500 w-8' 
                  : 'bg-emerald-200 hover:bg-emerald-300'
              }`}
            />
          ))}
        </div>

        {/* Grid de testimonios mini */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={`mini-${index}`}
              className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {testimonial.text.length > 100 
                  ? `${testimonial.text.substring(0, 100)}...` 
                  : testimonial.text
                }
              </p>
              <div className="mt-4 pt-3 border-t border-amber-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{testimonial.petPhoto}</span>
                    <span className="text-slate-600 text-sm font-medium">{testimonial.pet}</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas de satisfacción */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-amber-600">4.9/5</div>
              <div className="text-slate-600">Calificación Promedio</div>
              <div className="flex justify-center space-x-1">
                {renderStars(5)}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-emerald-600">500+</div>
              <div className="text-slate-600">Familias Satisfechas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-slate-600">Recomendación</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-slate-600">Disponibilidad</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres ser el próximo testimonio?
            </h3>
            <p className="text-amber-100 mb-6">
              Únete a cientos de familias que ya confían en nosotros para cuidar de sus mascotas
            </p>
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
              <span>🚀</span>
              <span>Comenzar Ahora</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
