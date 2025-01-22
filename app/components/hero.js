"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between">
        {/* Texto del Hero */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Grupo Alliance Medical Supplies
          </h1>
          <p className="text-gray-700 mb-6">
            <br></br> En Alliance, estamos comprometidos con el acompañamiento e
            innovación en el sector salud. Nuestro enfoque se centra en ofrecer
            dispositivos médicos y medicamentos de alta calidad que respalden la
            labor médica. Nos enorgullece colaborar estrechamente con
            instituciones de salud para proporcionarles los productos más
            avanzados y eficaces disponibles en el mercado.
          </p>
          <p className="text-gray-700 mb-6">
            Contamos con una red de proveedores confiables, nos esforzamos por
            ser un socio de confianza para los profesionales de la salud en la
            búsqueda de mejorar la calidad de vida de sus pacientes. Nuestra
            misión es facilitar el acceso a tecnologías innovadoras y
            tratamientos seguros que contribuyan al éxito de cada procedimiento.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="/products"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Productos
            </a>

            <a
              href="/about"
              className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg shadow-md hover:bg-gray-300 transition"
            >
              Nosotros
            </a>
          </div>
        </div>

        {/* Imagen del Doctor */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative">
          <Image
            src="/Doctor.svg" // Reemplaza con la ruta de tu imagen
            alt="Doctor"
            width={450}
            height={450}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Estadísticas */}
      <div className="mt-10 lg:mt-16 container mx-auto px-6 text-center lg:text-left">
        <div className="grid grid-cols-3 gap-6 lg:w-1/2 lg:mx-0">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">50k+</h3>
            <p className="text-gray-700">
              Clientes <br></br>satisfechos
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">350+</h3>
            <p className="text-gray-700">Hospitales que confían en nosotros</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">98%</h3>
            <p className="text-gray-700">Entregas completadas con exito</p>
          </div>
        </div>
      </div>

      {/* Botones Sociales */}
      <div className="absolute top-10 right-10 space-y-4 hidden lg:block">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition block"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition block"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition block"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition block"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
