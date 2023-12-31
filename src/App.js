import { useState } from "react";
import "./App.css";
import NavbarDemo from "./component/NavbarDemo";
import { data } from "./component/backend/data/Data";
import RoutesDemo from "./component/routes/RoutesDemo";

function App() {
  const { mencart, womencart } = data;
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishListItems] = useState([]);

 const handleWishlist = (wishlistItems) =>{
  setCartItems(wishlistItems)
 }

  const handleAddProduct = (product) => {
    var svg = document.getElementById("cart");
    svg.style.color="yellow";

    var svg1 = document.getElementById("wishlist");
    svg1.style.color= "rgba(255, 255, 255, 0.55)";


    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleAddProductWishlist = (product) => {
    // console.log(product)
    var svg = document.getElementById("wishlist");
    svg.style.color="red";

    var svg1 = document.getElementById("cart");
    svg1.style.color= "rgba(255, 255, 255, 0.55)";

    const ProductExist = wishlistItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setWishListItems(
        wishlistItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setWishListItems([...wishlistItems, { ...product, quantity: 1 }]);
    }
  };

  const handleClearProduct = () => {
    setCartItems([]);
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleRemoveProductWishlist = (product) => {
    const ProductExist = wishlistItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setWishListItems(wishlistItems.filter((item) => item.id !== product.id));
    } else {
      setWishListItems(
        wishlistItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(./images/sample11.jpg)` }}>
      <NavbarDemo />
      <RoutesDemo
        mencart={mencart}
        womencart={womencart}
        handleAddProduct={handleAddProduct}
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        handleClearProduct={handleClearProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleAddProductWishlist={handleAddProductWishlist}
        handleRemoveProductWishlist={handleRemoveProductWishlist}
        handleWishlist={handleWishlist}
      />
    </div>
  );
}

export default App;
