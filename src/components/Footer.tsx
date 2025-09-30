import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Planes y Cobertura', href: '/planes' },
    { label: 'Cómo Funciona', href: '/como-funciona' },
    { label: 'Memorial', href: '/memorial' },
    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { label: 'Contacto', href: '/contacto' }
  ];

  const services = [
    { label: 'Asistencia 24/7', href: '/planes' },
    { label: 'Coordinación Veterinaria', href: '/planes' },
    { label: 'Gestión de Reclamos', href: '/planes' },
    { label: 'Memorial Digital', href: '/memorial' },
    { label: 'Seguros para Mascotas', href: '/planes' }
  ];

  const legalLinks = [
    { label: 'Términos de Servicio', href: '/terminos' },
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Aviso Legal', href: '/aviso-legal' },
    { label: 'Cookies', href: '/cookies' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '/recursos/facebook-icon.svg', href: 'https://facebook.com/mimascotasegura', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: '/recursos/instagram-icon.svg', href: 'https://instagram.com/mimascotasegura', color: 'hover:bg-pink-600' },
    { name: 'Twitter', icon: '/recursos/twitter-icon.svg', href: 'https://twitter.com/mimascotasegura', color: 'hover:bg-blue-400' },
    { name: 'YouTube', icon: '/recursos/youtube-icon.svg', href: 'https://youtube.com/mimascotasegura', color: 'hover:bg-red-600' }
  ];

  return (
    <footer className="bg-slate-800 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/recursos/logoms.jpeg"
                  alt="Mi Mascota Segura Logo"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mi Mascota Segura</h3>
                <p className="text-emerald-300 text-sm">Tu tranquilidad, su bienestar</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Cuidamos de tu mascota en cada etapa de su vida con servicios integrales 
              de salud y protección disponibles 24/7.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">Emergencias 24/7</p>
                  <p className="text-slate-300 text-sm">Llamada directa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-slate-300 text-sm">contacto@mimascotasegura.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-slate-300 text-sm">Barrancabermeja, Santander</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-emerald-300">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-300 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-emerald-300">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-emerald-300 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-emerald-300">Mantente Conectado</h4>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                Recibe consejos de cuidado y noticias importantes para tu mascota.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
                  ✉️
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-slate-300 text-sm mb-3">Síguenos en redes sociales</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 ${social.color} transition-all duration-200 transform hover:scale-110`}
                    title={social.name}
                  >
                    <Image 
                      src={social.icon} 
                      alt={social.name} 
                      width={16} 
                      height={16}
                      className="text-slate-300"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Emergency highlight */}
            <div className="bg-red-600 rounded-lg p-4 mt-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-bold">¿Emergencia?</span>
              </div>
              <p className="text-red-100 text-sm mb-3">
                Llama ahora para atención inmediata
              </p>
              <a
                href="tel:+573214349583"
                className="block bg-white text-red-600 text-center py-2 px-4 rounded-md font-bold hover:bg-red-50 transition-colors duration-200"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Trust badges */}
      <div className="bg-slate-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl">🏆</div>
              <p className="text-slate-300 text-sm">Certificación de Calidad</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🔒</div>
              <p className="text-slate-300 text-sm">Datos Seguros SSL</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">✅</div>
              <p className="text-slate-300 text-sm">Empresa Verificada</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🌟</div>
              <p className="text-slate-300 text-sm">5 Estrellas en Servicio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © {currentYear} Mi Mascota Segura. Todos los derechos reservados.
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-emerald-300 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Made with love */}
            <div className="text-slate-400 text-sm">
              <span>Hecho con cariño para las mascotas</span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/573214349583"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
          title="WhatsApp"
        >
          <Image 
            src="/recursos/whatsapp-icon.svg" 
            alt="WhatsApp" 
            width={24} 
            height={24}
            className="filter invert"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;