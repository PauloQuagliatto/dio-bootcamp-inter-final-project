import { createContext, useEffect, useState } from "react";

import productsList from "../services/productsList";

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    itemsCount: 0,
    products: productsList,
    items: [],
  });

  useEffect(() => {
    const localCart = localStorage.getItem("dioshopping: cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);
  
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
