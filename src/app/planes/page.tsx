import Header from '@/components/Header';
import Plans from '@/components/Plans';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Planes y Cobertura - Mi Mascota Segura',
  description: 'Conoce nuestros planes de membresía y opciones de seguros para mascotas con las mejores aseguradoras del país.',
};

export default function PlanesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="pt-20">
        <Plans />
      </main>
      <Footer />
    </div>
  );
}