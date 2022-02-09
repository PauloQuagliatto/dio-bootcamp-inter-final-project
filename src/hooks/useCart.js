import { useEffect, useContext } from "react";

import { CartContext } from "../context/CartContext";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const showCart = () => {};
  const addToCart = (product) => {
    localStorage.setItem("dioshopping: cart", JSON.stringify(product));
  };
  const removeFromCart = (id) => {};
  const increaseQuantity = (id) => {};
  const decreaseQuantity = (id) => {};

  const totalPrice = () => {
    let total = 0;
    if (cart && cart.length > 0) {
      cart.map((product) => {
        return (total += cart[i].price * cart[i].quantity);
      });
    }
    return total;
  };

  useEffect(() => {
    totalPrice();
  }, [cart]);

  return {
    showCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  };
};

export default useCart;
