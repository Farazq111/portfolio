import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
