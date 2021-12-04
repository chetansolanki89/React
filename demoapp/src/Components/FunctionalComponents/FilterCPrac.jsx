import React, { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const FilterCPrac = ({ pval }) => {
  const [category, setCategory] = useState(pval);
  const [search, setSearch] = useState("");
  // const [conditionalSearch, setConditionalSearch] = useState();

  const handleCategory = () => {
    const filtered = pval.filter((item) => item.category === search);
    search === "" ? setCategory(pval) : setCategory(filtered);
  };

  // const filterObj = pval.filter((elem) => elem);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Category"
        style="width:700px"
      />
      <button onclick={handleCategory}>Search</button>
      <div className="carddiv">
        {category.map((item) => {
          return (
            <div className="item">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.url} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <b>Weight: </b>
                    {item.weight}
                  </Card.Text>
                  <Button variant="primary">
                    <b>Rs.</b>
                    {item.price}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      )
    </div>
  );
};

export default FilterCPrac;
