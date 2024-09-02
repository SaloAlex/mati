
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import background from '../assets/imagen4.jpg'; // Importa la imagen de fondo

const ContactUs = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative container mx-auto px-4 flex flex-col lg:flex-row p-8">
        {/* Fondo opaco detrás del contenido */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg shadow-lg"></div>

        <div className="relative flex flex-col lg:flex-row w-full">
          {/* Formulario de contacto */}
          <div className="lg:w-1/2 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-black z-10">
            <h2 className="text-3xl font-bold mb-6">Envíanos tu consulta</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="Tu teléfono"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Tu correo electrónico"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Escribe tu mensaje"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-custom-gold text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-custom-gold-dark"
                  type="button"
                >
                  Enviar Consulta
                </button>
              </div>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0 relative z-10">
            <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
            <div className="flex items-center mb-4">
              <FaWhatsapp className="text-green-500 text-3xl mr-4" />
              <span className="text-lg">+54 9 11 1234-5678</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-red-500 text-3xl mr-4" />
              <span className="text-lg">Av. Siempre Viva 742, Springfield</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
