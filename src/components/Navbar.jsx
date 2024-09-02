import logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <nav className="bg-custom-black text-custom-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src={logo} alt="Logística Matías" className="h-20 w-auto" />
        </div>
        <div>
          <a href="#features" className="px-4 hover:text-custom-gold">Servicios</a>
          <a href="#cta" className="px-4 hover:text-custom-gold">Contáctanos</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
