import React from "react";

import useCart from "../../hooks/useCart";

import Container from "./styles";

const Card = ({ product, children }) => {
  const { addToCart } = useCart();
  return (
    <Container>
      <div>
        <img src={product.image} alt={product.name_product} />
        <h6>{children}</h6>
        <p>R$ {product.price.toFixed(2)}</p>
      </div>

      <button onClick={() => addToCart(product)}>
        Adicionar
      </button>
    </Container>
  );
};

export default Card;
