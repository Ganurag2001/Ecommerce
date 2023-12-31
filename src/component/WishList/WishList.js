import React from "react";
import "./Cart.css";

const WishList = ({
  wishlistItems,
  handleAddProductWishlist,
  handleRemoveProductWishlist,
  handleWishlist,
}) => {
  return (
    <>
      <div className="cart_items">
        <h2 className="cart_items-header">WishList Items</h2>
        {wishlistItems.length === 0 && (
          <div>No Items are Added in WishList</div>
        )}
        <div>
          {wishlistItems.map((item) => (
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
                    handleAddProductWishlist(item);
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
                    handleRemoveProductWishlist(item);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={
          () =>{
            handleWishlist(wishlistItems)
          }
        } type="button" className="btn btn-outline-primary">
                Add to Cart
              </button>
      </div>
    </>
  );
};

export default WishList;
