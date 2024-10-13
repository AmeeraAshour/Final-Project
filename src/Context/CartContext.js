import React, { createContext, useState } from "react";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeItemFromCart =(id) => {
    setCart((currItems ) => currItems.filter((item) =>item.id !==id));
  }
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};
