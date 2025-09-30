import Header from '@/components/Header';
import Memorial from '@/components/Memorial';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Memorial Digital - Mi Mascota Segura',
  description: 'Crea un memorial eterno para tu mascota con nuestros servicios especializados en despedida y productos conmemorativos.',
};

export default function MemorialPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="pt-20">
        <Memorial />
      </main>
      <Footer />
    </div>
  );
}