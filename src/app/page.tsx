import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Footer from '@/components/Footer';

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
