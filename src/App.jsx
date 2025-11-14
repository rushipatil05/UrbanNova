import { useState, useMemo } from 'react';
import { initialProducts, categories } from './data/products';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';
import ShoppingAnimation from './components/ShoppingAnimation';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);

  const decrementFromCart = (itemId) => {
    setCartItems(cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  }

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return initialProducts;
    }
    return initialProducts.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative">
      <ShoppingAnimation />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="mb-12 text-center">
          <h1
            className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-3"
            style={{ fontFamily: "Anton" }}
          >
            Urban Nova
          </h1>

          <p className="text-gray-700 text-lg">Discover amazing products and start shopping</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="text-center text-gray-500 py-12">
                No products found in this category
              </p>
            )}
          </div>

          <div className="lg:col-span-1">
            <ShoppingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} decrementCart={decrementFromCart} />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
