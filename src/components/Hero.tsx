'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-emerald-50 to-teal-100"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Principal */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                La tranquilidad de{' '}
                <span className="text-emerald-600 relative">
                  tenerlos protegidos
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-emerald-200 -z-10 rounded-full"></div>
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 font-light">
                El amor que te une a ellos
              </p>
            </div>

            <p className="text-lg text-slate-700 max-w-xl leading-relaxed">
              En <strong>Mi Mascota Segura</strong> entendemos que tu mascota es parte indispensable de tu familia. 
              Por eso, hemos creado una plataforma que te brinda la tranquilidad de saber que estarán protegidos 
              ante cualquier imprevisto.
            </p>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="tel:300XXXXXXX"
                className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <span className="text-2xl">🚨</span>
                <span>Emergencias 24/7</span>
                <div className="w-2 h-2 bg-red-300 rounded-full animate-ping"></div>
              </Link>
              
              <Link
                href="https://wa.me/573XXXXXXXXX"
                target="_blank"
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <span className="text-2xl">💬</span>
                <span>WhatsApp inmediato</span>
              </Link>
              
              <Link
                href="/planes"
                className="group bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <span className="text-2xl">📄</span>
                <span>Ver Planes y Precios</span>
              </Link>
            </div>

            {/* Estadísticas */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">24/7</div>
                <div className="text-sm text-slate-600">Atención</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-slate-600">Mascotas Protegidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">50+</div>
                <div className="text-sm text-slate-600">Veterinarios Aliados</div>
              </div>
            </div>
          </div>

          {/* Imagen Principal */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/recursos/ftocalida.png"
                  alt="Mascota feliz con su familia - Mi Mascota Segura"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Elementos flotantes decorativos */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce delay-0"></div>
            <div className="absolute -top-2 -right-6 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-300"></div>
            <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-blue-400 rounded-full animate-bounce delay-700"></div>
            <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;