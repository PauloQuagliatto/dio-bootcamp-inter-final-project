import React from "react";

import productsList from "../../services/productsList";

import Item from "../../components/Item";
import Card from "../../components/Card";

import Container from "./styles";

const HomePage = () => {
    console.log(productsList);
  const categorys = productsList.map((category) => {
    const container = {};
    container["id"] = category.id_categorys;
    container["name"] = category.name_categorys;
    return container;
  });

  const category = categorys
    .map(JSON.stringify)
    .filter(function (item, index, arr) {
      return arr.indexOf(item, index + 1) === -1;
    })
    .map(JSON.parse);

  const arrayCategory = categorys.map((category) => category.name);
  let count = {};

  for (let i = 0; i < arrayCategory.length; i++) {
    {
      let key = arrayCategory[i];
      count[key] = count[key] ? count[key] + 1 : 1;
    }
  }

  return (
    <Container>
      <div>
        <h5>Categorias</h5>
        <li>
          {category.map((category) => {
            return (
              <Item
                key={category.id}
                name={category.name}
                details={count[category.name]}
              />
            );
          })}
        </li>
      </div>
      <div>
        {productsList.map((product) => {
          return (
            <Card key={product.id_product} product={product}>
              {product.name_product}
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default HomePage;
