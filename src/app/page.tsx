import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mi Mascota Segura - Tu tranquilidad, su bienestar',
  description: 'Cuidamos de tu mascota en cada etapa de su vida. Membresía integral con asistencia 24/7 y seguros para mascotas.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Welcome />
      </main>
      <Footer />
    </div>
  );
}
