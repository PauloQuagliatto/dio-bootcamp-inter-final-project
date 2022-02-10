import { useEffect, useContext } from "react";

import { CartContext } from "../context/CartContext";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const addItem = (product) => {
    let { items, itemsCount, ...oldCart } = cart;
    if (cart.itemsCount === 0) {
      const item = {
        id: product.id_product,
        name: product.name_product,
        price: product.price,
        image: product.image,
        quantity: 1,
      };

      items.push(item);
      itemsCount++;

      localStorage.setItem(
        "dioshopping: cart",
        JSON.stringify({ items, itemsCount, ...oldCart })
      );

      setCart({ ...oldCart, items, itemsCount });
    } else {
      let hasProduct = false;
      items.map((item, index) => {
        if (item.id === product.id_product) {
          increaseQuantity(index);
          hasProduct = true;
        }
        return hasProduct;
      });

      console.log(hasProduct);

      if (!hasProduct) {
        const item = {
          id: product.id_product,
          name: product.name_product,
          price: product.price,
          image: product.image,
          quantity: 1,
        };

        items.push(item);
        itemsCount++;

        localStorage.setItem(
          "dioshopping: cart",
          JSON.stringify({ items, itemsCount, ...oldCart })
        );
        setCart({ items, itemsCount, ...oldCart });
      }
    }
  };

  const removeItem = (productId) => {
    let { items, itemsCount, ...oldCart } = cart;
    let newItems = [];

    items.map((item) => {
      if (item.id === productId) {
        itemsCount -= item.quantity;
      } else {
        newItems.push(item);
      }
    });

    localStorage.setItem(
      "dioshopping: cart",
      JSON.stringify({ items: newItems, itemsCount, ...oldCart })
    );

    setCart({ items: newItems, itemsCount, ...oldCart });
  };

  const increaseQuantity = (index) => {
    let { items, itemsCount, ...oldCart } = cart;

    items[index].quantity++;
    itemsCount++;

    localStorage.setItem(
      "dioshopping: cart",
      JSON.stringify({ ...oldCart, items, itemsCount })
    );

    setCart({ ...oldCart, items, itemsCount });
  };

  const decreaseQuantity = (index) => {
    let { items, itemsCount, ...oldCart } = cart;
    if (items[index].quantity - 1 === 0) {
      removeItem(items[index].id);
    } else {
      items[index].quantity--;
      itemsCount--;

      localStorage.setItem(
        "dioshopping: cart",
        JSON.stringify({ ...oldCart, items, itemsCount })
      );

      setCart({ ...oldCart, items, itemsCount });
    }
  };

  const totalPrice = () => {
    let total = 0;
    if (cart.items.length > 0) {
      cart.items.map((item) => {
        total += item.price * item.quantity;
      });
    }
    return total.toFixed(2);
  };

  useEffect(() => {
    totalPrice();
  }, [cart]);

  return {
    cart,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  };
};

export default useCart;
