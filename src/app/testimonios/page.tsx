import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Testimonios - Mi Mascota Segura',
  description: 'Lee las experiencias reales de familias que han confiado en nosotros para cuidar de sus mascotas.',
};

export default function TestimoniosPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}