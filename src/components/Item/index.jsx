import React from "react";

const Item = ({ name, details }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{details}</p>
    </div>
  );
};

export default Item;
