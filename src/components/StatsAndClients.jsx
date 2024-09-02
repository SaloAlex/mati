import { FaSmile, FaShippingFast, FaCalendarAlt } from "react-icons/fa";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";

const StatsAndClients = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      {/* Sección de estadísticas */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-10">Nuestra Trayectoria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <FaSmile className="text-6xl text-custom-gold mb-4" />
            <h3 className="text-2xl font-semibold">+500</h3>
            <p className="text-lg">Clientes Satisfechos</p>
          </div>
          <div className="flex flex-col items-center">
            <FaShippingFast className="text-6xl text-custom-gold mb-4" />
            <h3 className="text-2xl font-semibold">+200,000</h3>
            <p className="text-lg">Envíos Realizados</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCalendarAlt className="text-6xl text-custom-gold mb-4" />
            <h3 className="text-2xl font-semibold">+5</h3>
            <p className="text-lg">Años de Trayectoria</p>
          </div>
        </div>
      </div>

      {/* Sección de logos de empresas */}
      <div className="bg-white py-10">
        <h2 className="text-3xl font-bold mb-10">
          Clientes que confían en nosotros
        </h2>
        <div className="flex flex-wrap justify-center space-x-16">
          {/* Grupo 1: Logos 1 y 2 */}
          <div className="flex flex-wrap justify-center space-x-8">
            <img
              src={logo1}
              alt="Logo 1"
              className="w-40 animate-bubble"
              style={{ animationDelay: "0s" }}
            />
            <img
              src={logo2}
              alt="Logo 2"
              className="w-40 animate-bubble"
              style={{ animationDelay: "0s" }}
            />
          </div>
          {/* Grupo 2: Logos 3 y 4 */}
          <div className="flex flex-wrap justify-center space-x-8 mt-8 sm:mt-0">
            <img
              src={logo3}
              alt="Logo 3"
              className="w-40 animate-bubble"
              style={{ animationDelay: "3s" }}
            />
            <img
              src={logo4}
              alt="Logo 4"
              className="w-40 animate-bubble"
              style={{ animationDelay: "3s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndClients;
