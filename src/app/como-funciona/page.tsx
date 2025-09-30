import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cómo Funciona - Mi Mascota Segura',
  description: 'Conoce el proceso paso a paso para proteger a tu mascota con nuestros servicios integrales.',
};

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="pt-20">
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}