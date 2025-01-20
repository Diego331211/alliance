"use client"; // Habilita que este componente funcione como cliente

import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar el menú

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu is now:", !isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/aliance.svg" // Reemplaza con tu ruta
            alt="Alliance Medical Supplies"
            layout="intrinsic"
            width={150}
            height={100}
          />
        </div>

        {/* Botón del Menú de Hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu} // Cambia el estado al hacer clic
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menú de Navegación */}
        <nav
          className={`${isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:space-x-6 space-y-8 bg-white absolute md:relative w-full md:w-auto left-0 top-[130px] md:top-0 md:p-0 p-4 shadow-md md:shadow-none z-10 font-sans`}
        >
          <a
            href="/"
            className="text-gray-800 hover:text-blue-500 font-medium block md:inline-block"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-800 hover:text-blue-500 font-medium block md:inline-block"
          >
            Nosotros
          </a>
          <a
            href="/products"
            className="text-gray-800 hover:text-blue-500 font-medium block md:inline-block"
          >
            Productos y servicios
          </a>
          <a
            href="/blog"
            className="text-gray-800 hover:text-blue-500 font-medium block md:inline-block"
          >
            Blog/noticias
          </a>
          <a
            href="/contact"
            className="text-gray-800 hover:text-blue-500 font-medium block md:inline-block"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
