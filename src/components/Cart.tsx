import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleCart, removeFromCart, changeQuantity } from "../store/cartSlice";
import "./Cart.css";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, isCartOpen } = useAppSelector((state) => state.cart);

  const totalPrice = items.reduce((sum, item) => sum + item.salePrice * item.quantity, 0);

  return (
    <>
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => dispatch(toggleCart())} />
      )}

      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <button onClick={() => dispatch(toggleCart())} className="cart-close-btn">
            ✕
          </button>
          <div className="cart-title-wrapper">
             <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Cart</span>
             <span className="cart-counter">
                {items.reduce((s, i) => s + i.quantity, 0)}
             </span>
          </div>
        </div>

        <div className="cart-items-container">
          {items.length === 0 ? (
            <p className="cart-empty">Add some products to the cart :)</p>
          ) : (
            items.map((item) => (
              <div key={item.sku} className="cart-item">
                <img
                  src={item.thumbnailImage}
                  alt={item.name}
                  className="cart-item-img"
                />
                
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <p className="cart-item-qty-text">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <div className="cart-item-actions">
                  <button
                    onClick={() => dispatch(removeFromCart(item.sku))}
                    className="btn-remove"
                    title="Remove item"
                  >
                    ✕
                  </button>
                  <p className="item-price">
                    $ {(item.salePrice * item.quantity).toFixed(2)}
                  </p>
                  
                  <div className="qty-controls">
                      <button 
                        className="qty-btn"
                        disabled={item.quantity <= 1}
                        onClick={() => dispatch(changeQuantity({ sku: item.sku, quantity: item.quantity - 1 }))}
                      >
                        -
                      </button>
                      <button 
                        className="qty-btn"
                        onClick={() => dispatch(changeQuantity({ sku: item.sku, quantity: item.quantity + 1 }))}
                      >
                        +
                      </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="subtotal">
            <span style={{ color: "#aaa" }}>SUBTOTAL</span>
            <span className="subtotal-price">$ {totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={() => alert(`Checkout - Total: $${totalPrice.toFixed(2)}`)}
            className="btn-checkout"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};