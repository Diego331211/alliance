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

  // Información de productos importada desde ProductData.js
  const allProducts = ProductData;

  const [selectedCategory, setSelectedCategory] = useState(
    "Dispositivos Médicos"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  // Filtrar y ordenar los productos
  const filteredProducts = ProductData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    if (a.category === selectedCategory && b.category !== selectedCategory) {
      return -1; // Mover productos de la categoría seleccionada al principio
    } else if (
      a.category !== selectedCategory &&
      b.category === selectedCategory
    ) {
      return 1; // Mover productos de otras categorías al final
    }
    return 0; // Mantener el orden si ambos productos pertenecen o no a la categoría seleccionada
  });
  return (
    <div className="flex w-full min-h-screen dark:bg-blue-900">
      {/* Panel izquierdo - Categorías */}
      <div className="w-1/4 bg-blue-100 p-4 dark:text-blue-900">
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

      {/* Panel derecho - Barra de búsqueda y productos */}
      <div className="w-3/4 p-6">
        {/* Barra de búsqueda */}
        <div className="flex justify-end mb-6 dark:text-blue-900">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-4 py-2 rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Productos */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Productos: {selectedCategory}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Modal */}
      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default Catalogo;
