import { Trash2, ShoppingBag, FileText, Minus } from 'lucide-react';


export default function ShoppingCart({ cartItems, onRemoveFromCart, decrementCart }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 sticky top-6 border-2 border-orange-200">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-orange-100">
        <div className="p-2 bg-gradient-to-br from-orange-500 to-rose-500 rounded-lg">
          <ShoppingBag className="text-white" size={24} />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">Shopping Cart</h2>
      </div>



      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="text-orange-400" size={32} />
          </div>
          <p className="text-gray-500 font-medium">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-orange-100 pb-4 hover:bg-orange-50/50 px-2 py-2 rounded-lg transition-colors">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-600 font-medium">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-lg bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                    ${item.price * item.quantity}
                  </span>

                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-rose-500 hover:text-rose-700 hover:bg-rose-50 p-2 rounded-lg transition-all"
                    aria-label="Remove from cart"
                  >
                    <Trash2 size={18} />
                  </button>


                  <button
                    onClick={() => decrementCart(item.id)}
                    className="text-rose-500 hover:text-rose-700 hover:bg-rose-50 p-2 rounded-lg transition-all"
                    aria-label="Remove from cart"
                  >
                    <Minus size={18} />
                  </button>


                </div>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-orange-200 pt-6 mt-6">
            <div className="bg-gradient-to-r from-orange-50 to-rose-50 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between text-2xl font-bold">
                <span className="text-gray-800">Total:</span>
                <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
