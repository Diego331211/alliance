const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-blue-500 font-semibold">{product.price}</p>
    </div>
  );
};

export default ProductCard;
