import React from "react";
import "./Cart.css";

const Cart = ({
  cartItems,
  // finallistItems,
  handleAddProduct,
  handleRemoveProduct,
  handleClearProduct,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <>
      <div className="cart_items">
        <h2 className="cart_items-header">
          Cart Items
          <div className="clear_cart">
            {cartItems.length >= 1 && (
              <button
                className="clear_cart-button"
                onClick={handleClearProduct}
              >
                Clear Cart
              </button>
            )}
          </div>
        </h2>
        {cartItems.length === 0 && <div>No Items are Added in Cart</div>}
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart_items-list">
              <img
                className="cart_items-image"
                src={item.image}
                alt={item.name}
              ></img>
              <div className="cart_items-name">{item.name}</div>
              <div className="cart_items-function">
                <button
                  className="cart_items-add"
                  onClick={() => {
                    handleAddProduct(item);
                  }}
                >
                  +
                </button>
                <input
                  type="text"
                  className="cart_items-quantity"
                  value={item.quantity}
                  readOnly
                />
                <button
                  className="cart_items-remove"
                  onClick={() => {
                    handleRemoveProduct(item);
                  }}
                >
                  -
                </button>
              </div>
              <div>${item.quantity * item.price}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="total_price-container">
        <div className="total_price-label">
          Discount: ${(totalPrice * 0.1).toFixed(2)}
        </div>
        <div className="total_price-label">Net Payable Amount :</div>
        <div className="total_price-value">
          ${(totalPrice - (totalPrice * 0.1).toFixed(2)).toFixed(2)}
        </div>
      </div>
    </>
  );
};

export default Cart;
