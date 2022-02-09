import { createContext, useEffect, useState } from "react";

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  
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
