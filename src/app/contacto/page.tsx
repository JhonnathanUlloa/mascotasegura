import Header from '@/components/Header';
import Contact from '@/components/Contact';
import GoogleMap from '@/components/GoogleMap';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contacto - Mi Mascota Segura',
  description: 'Contáctanos para resolver tus dudas. Estamos disponibles 24/7 para emergencias y consultas sobre nuestros servicios.',
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="pt-20">
        <Contact />
        <GoogleMap />
      </main>
      <Footer />
    </div>
  );
}