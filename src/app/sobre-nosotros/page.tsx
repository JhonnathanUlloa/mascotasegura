import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sobre Nosotros - Mi Mascota Segura',
  description: 'Conoce la historia, misión y el equipo que hace posible tu tranquilidad y el bienestar de tu mascota.',
};

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="pt-20">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}