"use client";

import Image from "next/image";

const AboutUsHero = () => {
  return (
    <section className="relative bg-blue-800 text-white">
      {/* Fondo del Hero */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/td.svg" // Reemplaza con la ruta de tu imagen de fondo
          alt="Pharmacy background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="container mx-auto px-6 py-20 text-center md:text-left md:flex md:items-center">
        {/* Texto Principal */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Nuestra dirección</h1>
          <p className="text-lg mb-6">
            Ser líderes en la distribución de material médico especializado,
            proporcionando soluciones integrales y de calidad para la atención
            de pacientes. En las líneas de material de osteosíntesis
            cráneo-maxilo-facial, cirugía de mano, terapia de presión negativa,
            injertos óseos y apósitos y ungüentos para clínica de heridas. Nos
            comprometemos a ofrecer un servicio de alta calidad y con personal
            calificado, contribuyendo a la generación de empleo.
          </p>
          <a
            href="/products" // Reemplaza con la ruta de tu página de productos
            className="bg-teal-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 transition"
          >
            Productos y servicios
          </a>
        </div>

        {/* Imagen Principal */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/td.svg" // Reemplaza con la ruta de tu imagen
            alt="Medical illustration"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
