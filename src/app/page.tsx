import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Plans from '@/components/Plans';
import HowItWorks from '@/components/HowItWorks';
import Memorial from '@/components/Memorial';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Plans />
        <HowItWorks />
        <Memorial />
        <Testimonials />
        <FAQ />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
