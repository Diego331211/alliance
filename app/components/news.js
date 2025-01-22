"use client";

import Image from "next/image";

const News = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Fondo SVG */}
      <Image
        src="/fondoNews.svg" // Cambia esto por la ruta real de tu archivo SVG
        alt="Newsletter Background"
        layout="fill" // Asegura que ocupe todo el espacio disponible
        objectFit="cover" // Ajusta el SVG para que cubra todo el contenedor
        objectPosition="center" // Centra el fondo
        className="z-[-1]" // Asegura que el fondo quede detrás del contenido
      />

      {/* Contenedor de contenido */}
      <div className="relative z-10 flex flex-col md:flex-row items-center min-h-screen">
        {/* Formulario */}
        <div className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center p-6">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-3">
                <Image
                  src="/aliance.svg" // Ruta de tu icono SVG
                  alt="Newsletter Icon"
                  width={500}
                  height={500}
                />
              </div>
              <h2 className="text-xl font-bold text-gray-700">Newsletter</h2>
              <p className="text-gray-500">
                Mantente al día con nuestras noticias y promociones.
              </p>
            </div>
            <form
              action="https://formsubmit.co/est.juan.gama@unimilitar.edu.co" // Reemplaza con tu endpoint
              method="POST"
            >
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="tu_correo@ejemplo.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Suscribirse
              </button>
              <p className="text-sm text-gray-400 mt-2 text-center">
                Tu correo está a salvo, no hacemos spam.
              </p>
            </form>
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center p-6">
          <div className="relative w-full h-64 md:w-[90%] md:h-[90%]">
            <Image
              src="/Devices.svg" // Cambia esto por la ruta real de tu imagen SVG
              alt="Imagen destacada"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
