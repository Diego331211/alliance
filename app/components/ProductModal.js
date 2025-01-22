const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 dark:text-blue-900">
      <div className="bg-white rounded-lg shadow-lg w-3/4 md:w-1/2 p-6 relative">
        {/* Botón de cerrar */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Contenido del producto */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="text-lg text-blue-500 font-semibold mt-4">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductModal;
