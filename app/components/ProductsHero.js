"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const products = [
  {
    name: "PRUEBA RAPIDA COVID19",
    image: "/productos/covid-test.jpg",
    code: "Código: 33698",
    link: "/products#covid-test",
  },
  {
    name: "SOLUCIÓN PAPANICOLAU 1000ML",
    image: "/productos/papanicolau.jpg",
    code: "Código: 17679",
    link: "/products#papanicolau",
  },
  {
    name: "TUBO TAPA LILA 4MLx100",
    image: "/productos/tubo-lila.jpg",
    code: "Código: 17614",
    link: "/products#tubo-lila",
  },
  {
    name: "TRIGLICÉRIDOS 4x50ML Kit",
    image: "/productos/trigliceridos.jpg",
    code: "Código: 16758",
    link: "/products#trigliceridos",
  },
  {
    name: "PRUEBA DROGA ABUSO",
    image: "/productos/droga-test.jpg",
    code: "Código: 41800",
    link: "/products#droga-test",
  },
];

const ProductsHero = () => {
  return (
    <div className="container mx-auto px-6 mt-10">
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
        Nuestros Productos
      </h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        spaceBetween={20}
        loop={true} // Hace que el carrusel sea infinito
        autoplay={{
          delay: 2000, // Cambia cada 3 segundos
          disableOnInteraction: false, // No se detiene al hacer clic
        }}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="py-6"
        onMouseEnter={(swiper) => swiper.autoplay.stop()} // Se detiene al pasar el cursor
        onMouseLeave={(swiper) => swiper.autoplay.start()} // Vuelve a moverse cuando se quita el cursor
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <a
              href={product.link}
              className="block bg-white rounded-lg shadow-lg p-4 text-center transform transition-transform hover:scale-105 h-full min-h-[300px] flex flex-col justify-between"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="mx-auto rounded-lg object-contain"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-sm text-gray-700">{product.code}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsHero;
