"use client";

import { useState } from "react";
import ProductModal from "./ProductModal";
import ProductCard from "./productCard";
import ProductData from "./productData"; // Componente con la información de los productos

const Catalogo = () => {
  const categories = [
    { id: "1", name: "Dispositivos Médicos", icon: "/icon1.svg" },
    { id: "2", name: "Materiales Descartables", icon: "/icon2.svg" },
    { id: "3", name: "Equipos Médicos", icon: "/icon3.svg" },
    { id: "4", name: "Otros Insumos", icon: "/icon4.svg" },
  ];

  const allProducts = ProductData;

  const [selectedCategory, setSelectedCategory] = useState(
    "Dispositivos Médicos"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const filteredProducts = ProductData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    if (a.category === selectedCategory && b.category !== selectedCategory) {
      return -1;
    } else if (
      a.category !== selectedCategory &&
      b.category === selectedCategory
    ) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="flex flex-col w-full min-h-screen dark:bg-blue-900">
      {/* Categorías en pantalla móvil */}
      <div className="bg-blue-100 p-4 dark:text-blue-900 md:hidden">
        <h2 className="text-center text-lg font-bold mb-4 dark:text-blue-900">
          Categorías
        </h2>
        <div className="flex justify-between overflow-x-auto space-x-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex flex-col items-center p-3 rounded-md text-center  min-w-[7rem] max-w-[7rem] h-32 flex-shrink-0 ${
                selectedCategory === category.name
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              <img
                src={category.icon}
                alt={category.name}
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Contenedor principal para categorías y productos en pantallas más grandes */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Categorías (solo en pantallas medianas y grandes) */}
        <div className="hidden md:block w-1/4 bg-blue-100 p-4 dark:text-blue-900">
          <h2 className="text-xl font-bold mb-4 dark:text-blue-900">
            Categorías
          </h2>
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-4 p-3 rounded-md w-full text-left ${
                    selectedCategory === category.name
                      ? "bg-blue-500 text-white"
                      : "bg-white"
                  }`}
                >
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-8 h-8"
                  />
                  <span>{category.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Productos */}
        <div className="w-full md:w-3/4 p-6">
          {/* Barra de búsqueda */}
          <div className="flex justify-end mb-6 dark:text-blue-900">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border px-4 py-2 rounded-md w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Productos */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Productos: {selectedCategory}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => openModal(product)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default Catalogo;
