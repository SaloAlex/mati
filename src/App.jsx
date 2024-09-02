import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import StatsAndClients from './components/StatsAndClients';
import CTA from './components/CTA';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <StatsAndClients />
      <CTA />
      <ContactUs /> {/* Añade el componente ContactUs aquí */}
      <Footer />
    </>
  );
}
export default App;
