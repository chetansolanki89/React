import React from "react";
import MappingChild from "./MappingChild";
import { products } from "./products";
import "./MappingParent.css";

const MappingParent = () => {
  return (
    <div>
      <h1>Bikes Collection</h1>

      <div className="cards">
        {products.map((item) => (
          <MappingChild
            item={item}
            //   name={item.name}
            //   price={item.price}
            //   desc={item.desc}
            //   fuel={item.fuel}
            //   url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default MappingParent;
