import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-orange-100">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-rose-100 text-orange-700 text-xs font-semibold rounded-full mb-3">
          {product.category}
        </span>
        <img src={product.link} alt={product.name} className="w-full h-48 object-contain mb-4" />
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">${product.price}</span>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 font-medium"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
