'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#planes', label: 'Planes y Precios' },
    { href: '#como-funciona', label: 'Cómo Funciona' },
    { href: '#memorial', label: 'Memorial' },
    { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐾</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Mi Mascota Segura</h1>
              <p className="text-xs text-slate-600 hidden sm:block">Tu tranquilidad, su bienestar</p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="tel:300XXXXXXX"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <span>🚨</span>
              <span>Emergencias 24/7</span>
            </Link>
            <Link
              href="https://wa.me/573XXXXXXXXX"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200 py-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link
                  href="tel:300XXXXXXX"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 w-full"
                >
                  <span>🚨</span>
                  <span>Emergencias 24/7</span>
                </Link>
                <Link
                  href="https://wa.me/573XXXXXXXXX"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 w-full"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;