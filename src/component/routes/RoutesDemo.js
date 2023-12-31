import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Cart from "../cart/Cart";
import Men from "../People/Men";
import Women from "../People/Women";
import WishList from "../WishList/WishList";
import SignUp from "../SignUp/SignUp";

const RoutesDemo = ({
  mencart,
  womencart,
  cartItems,
  wishlistItems,
  handleAddProduct,
  handleClearProduct,
  handleRemoveProduct,
  handleAddProductWishlist,
  handleRemoveProductWishlist,
  handleWishlist
}) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              mencart={mencart}
              womencart={womencart}
              handleAddProduct={handleAddProduct}
              handleAddProductWishlist={handleAddProductWishlist}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleClearProduct={handleClearProduct}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        ></Route>
        <Route
          path="/men"
          element={
            <Men
              mencart={mencart}
              handleAddProduct={handleAddProduct}
              handleAddProductWishlist={handleAddProductWishlist}
            />
          }
        ></Route>
        <Route
          path="/women"
          element={
            <Women
              womencart={womencart}
              handleAddProduct={handleAddProduct}
              handleAddProductWishlist={handleAddProductWishlist}
            />
          }
        ></Route>
        <Route
          path="/wishlist"
          element={
            <WishList
              wishlistItems={wishlistItems}
              handleAddProductWishlist={handleAddProductWishlist}
              handleRemoveProductWishlist={handleRemoveProductWishlist}
              handleAddProduct={handleAddProduct}
              handleWishlist={handleWishlist}
            />
          }
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
};

export default RoutesDemo;
