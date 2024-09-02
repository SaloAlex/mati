import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel
import image1 from '../assets/imagen1.jpg';
import image2 from '../assets/imagen2.jpg';
import image3 from '../assets/imagen3.jpg';

const Hero = () => {
  return (
    <header className="relative text-custom-white text-center">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={7000} 
        transitionTime={500}  // Duración de la transición
        swipeable={true}      // Permite cambiar las imágenes deslizando
        emulateTouch={true}   // Permite el deslizamiento en dispositivos táctiles
      >
        {/* Primera imagen */}
        <div className="relative h-[32rem]">  
          <img src={image1} alt="Imagen 1" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <h1 className="text-3xl font-bold">La logística que se adapta a tus necesidades</h1>
            <p className="mt-4 text-base">Desde el primer kilómetro hasta la entrega final, estamos vos.</p>
            <button className="mt-8 px-6 py-2 bg-custom-gold text-custom-black font-semibold rounded-full hover:bg-custom-white transition duration-300">
              ¡Comienza ahora!
            </button>
          </div>
        </div>
        
        {/* Segunda imagen */}
        <div className="relative h-[32rem]">
          <img src={image2} alt="Imagen 2" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <h1 className="text-3xl font-bold">Confía en nosotros para mover lo que más importa</h1>
            <p className="mt-4 text-base">Tu confianza es nuestra mayor responsabilidad.</p>
            <button className="mt-8 px-6 py-2 bg-custom-gold text-custom-black font-semibold rounded-full hover:bg-custom-white transition duration-300">
              ¡Explora más!
            </button>
          </div>
        </div>
        
        {/* Tercera imagen */}
        <div className="relative h-[32rem]">
          <img src={image3} alt="Imagen 3" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <h1 className="text-3xl font-bold">Conectamos destinos, un paquete a la vez</h1>
            <p className="mt-4 text-base">Cada paquete es un eslabón en la cadena que nos une.</p>
            <button className="mt-8 px-6 py-2 bg-custom-gold text-custom-black font-semibold rounded-full hover:bg-custom-white transition duration-300">
              ¡Descubre cómo!
            </button>
          </div>
        </div>
      </Carousel>
    </header>
  );
};

export default Hero;
