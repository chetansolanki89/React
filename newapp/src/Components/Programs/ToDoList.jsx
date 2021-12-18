import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const ToDoList = () => {
  const [add, setAdd] = useState([]);
  const [del, setDel] = useState([]);
  const [count, setCount] = useState(0);
  //   console.log("dellee", del);

  function addElement() {
    setAdd([
      ...add,
      {
        id: count,
        data: document.getElementById("item").value,
      },
    ]);
    document.getElementById("item").value = "";
    setCount(count + 1);
  }
  function delElement(ele) {
    console.log("Ele: ", ele);
    // setDel(ele);
    setAdd(add.filter((item) => item.data !== ele.data));
    console.log("Deleted: ", del);
  }

  return (
    <div>
      <Card>
        <Card.Body style={{ backgroundColor: "seashell" }}>
          <input id="item" type="text" />
          <Button onClick={() => addElement()}>ADD</Button>
          {console.log(add)}

          {add.map((item) => {
            return (
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "skyblue",
                    height: "40px",
                    margin: "10px",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <Card.Text style={{ margin: "5px" }}>
                    <h4>{item.data}</h4>
                  </Card.Text>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Button
                    id={item.id}
                    onClick={() => {
                      delElement({ id: item.id, data: item.data });
                      setDel({ id: item.id, data: item.data });
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ToDoList;
