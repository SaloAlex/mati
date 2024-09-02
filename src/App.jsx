import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import StatsAndClients from './components/StatsAndClients';
import Cta from './components/Cta';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <StatsAndClients />
      <Cta />
      <ContactUs /> {/* Añade el componente ContactUs aquí */}
      <Footer />
    </>
  );
}
export default App;
