import dynamic from 'next/dynamic';

// Importación estática de componentes críticos
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Importación dinámica de componentes pesados
const Hero = dynamic(() => import('@/components/Hero'), { ssr: true });
const Welcome = dynamic(() => import('@/components/Welcome'), { ssr: true });

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        <Hero />
        <Welcome />
      </main>
      <Footer />
    </>
  );
}
