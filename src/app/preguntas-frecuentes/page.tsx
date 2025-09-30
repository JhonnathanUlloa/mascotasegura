import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Preguntas Frecuentes - Mi Mascota Segura',
  description: 'Encuentra respuestas a las dudas más comunes sobre nuestros servicios, membresías y seguros para mascotas.',
};

export default function PreguntasFrecuentesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="pt-20">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}