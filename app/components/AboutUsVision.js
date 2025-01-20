"use client";

import Image from "next/image";

const VisionSection = () => {
  return (
    <section className="bg-blue-100 py-20">
      <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
        <div className="md:flex md:items-center">
          {/* Imagen */}
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div>
              <Image
                src="/Vision.svg" // Ruta de la imagen
                alt="Nuestra visión"
                width={990}
                height={1000}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="md:w-2/3 md:pl-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Nuestra Visión
        </h2>
            <p className="text-xl text-blue-800">
              Ser reconocidos a nivel Nacional como una empresa líder en la
              distribución de material médico especializado, siendo referentes
              en innovación, calidad y servicio. Buscamos expandir nuestro
              alcance para abarcar nuevos mercados y fortalecer nuestras
              alianzas estratégicas con fabricantes y proveedores. Aspiramos a
              ser un pilar fundamental en la mejora de la atención médica,
              brindando soluciones eficientes y que contribuyan a una
              recuperación más rápida y exitosa de los pacientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
