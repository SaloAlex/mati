
import imageLogistica from '../assets/imagen5.png'; // Reemplaza con la ruta de tu imagen
import imageConfianza from '../assets/imagen6.png'; // Reemplaza con la ruta de tu imagen
import imageConexion from '../assets/imagen7.png'; // Reemplaza con la ruta de tu imagen

const Features = () => {
  return (
    <section
      id="features"
      className="py-5 text-center bg-custom-white text-custom-black mt-5"
    >
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold">Nuestros Ideales</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logística */}
          <div className="bg-custom-black text-custom-white p-6 rounded-lg shadow-lg">
            <img src={imageLogistica} alt="Logística" className="w-40 h-40 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-custom-gold">
              Logística
            </h3>
            <p className="mt-4">
              Elaboramos un plan estratégico diseñado específicamente para
              gestionar y ejecutar acciones logísticas alineadas con las
              necesidades de tu negocio. 
            </p>
          </div>

          {/* Confianza */}
          <div className="bg-custom-black text-custom-white p-6 rounded-lg shadow-lg">
            <img src={imageConfianza} alt="Confianza" className="w-40 h-40 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-custom-gold">
              Confianza
            </h3>
            <p className="mt-4">
              Entendemos que lo que transportamos no son solo paquetes, sino la
              confianza que depositás en nosotros. Cada envío es tratado con la
              máxima responsabilidad, asegurando que llegue a su destino de
              manera segura y puntual. 
            </p>
          </div>

          {/* Conexión */}
          <div className="bg-custom-black text-custom-white p-6 rounded-lg shadow-lg">
            <img src={imageConexion} alt="Conexión" className="w-40 h-40 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-custom-gold">
              Conexión
            </h3>
            <p className="mt-4">
              Cada envío que realizamos es más que un simple traslado; es un
              enlace en la cadena que conecta a personas y negocios. Sabemos que
              cada paquete lleva consigo una promesa, y nos comprometemos a
              cumplirla con precisión y cuidado. .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
