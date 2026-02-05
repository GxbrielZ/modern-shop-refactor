import { useEffect, useState, useMemo } from "react";
import type { Product } from "./types";
import { fetchProducts } from "./services/api";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addToCart, toggleCart } from "./store/cartSlice";
import { Cart } from "./components/Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const colors = useMemo(() => {
    const allColors = products.map((p) => p.color).filter((c): c is string => Boolean(c));
    return Array.from(new Set(allColors));
  }, [products]);

  const displayedProducts = selectedColor
    ? products.filter((product) => product.color === selectedColor)
    : products;

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  if (loading) return <div className="loading">Loading products...</div>;

  return (
    <div className="app-container">
      <Cart />
      
      <header className="app-header">
        <h1 className="header-title">Modern Shop</h1>
        
        <button onClick={() => dispatch(toggleCart())} className="cart-trigger-btn">
          🛒 Cart 
          <span className="cart-badge">
            {totalQuantity}
          </span>
        </button>
      </header>

      <div className="filters-container">
        <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Filter by color:</span>
        
        <button 
          className={`filter-btn ${selectedColor === null ? 'active' : ''}`}
          onClick={() => setSelectedColor(null)}
        >
          All
        </button>

        {colors.map(color => (
          <button
            key={color}
            className={`filter-btn ${selectedColor === color ? 'active' : ''}`}
            onClick={() => setSelectedColor(color)}
          >
            {color}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {displayedProducts.map((product) => (
          <div key={product.sku} className="product-card">
            <div>
              <img 
                src={product.image}
                alt={product.name} 
                className="product-img" 
              />
              <h3 className="product-title">{product.name}</h3>
              
              <p className="product-price">
                {product.salePrice ? `$${product.salePrice}` : "Price unknown"}
              </p>
              
              {product.onSale && (
                <span className="sale-badge">On Sale</span>
              )}
            </div>

            <button 
              onClick={() => handleAddToCart(product)}
              className="add-btn"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;