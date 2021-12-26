import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsChild from "./ProductsChild";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import ArtTrackOutlinedIcon from "@mui/icons-material/ArtTrackOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";

const ProductsCart = () => {
  const cartItems = useSelector((state) => state.productsReducer.cart);
  const dispatch = useDispatch();
  const cart = new Set(cartItems);
  const cartUnique = [...cart];
  const grouped = {};
  cartUnique.forEach((elem) => {
    grouped[elem] = grouped[elem] ? grouped[elem] + 1 : 1;
  });
  console.log("Grouped: ", grouped);

  // cartItems.forEach((elem)=>{
  //   cart[elem]=cart[elem]?cart[elem]+1:1
  // })
  console.log("Cart: ", cart);
  console.log("CartUnique: ", cartUnique);

  console.log("Cart Items", cartItems);
  return (
    <React.Fragment>
      <h4>Cart Items</h4>
      <div className="parent">
        {cartUnique.map((item) => {
          return (
            <Card sx={{ width: 300 }} style={{ margin: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  style={{
                    width: "auto",
                    maxHeight: "300px",
                  }}
                  component="img"
                  alt=""
                  image={item.img}
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name.length > 20
                    ? item.name.substr(0, 20) + "..."
                    : item.name}
                </Typography>
                <Typography variant="h6" component="div">
                  Price: &#x20B9;{Math.ceil(item.price * 75)}
                </Typography>
                <Typography variant="h6" component="div">
                  Quantity:
                  <IconButton
                    color="error"
                    size="large"
                    onClick={() => {
                      // cartItems.filter((elem) => elem === item).length>1?cartItems
                      dispatch({
                        type: "REMOVE_PRODUCT",
                        data: item,
                      });
                    }}
                  >
                    <RemoveCircleOutlinedIcon />
                  </IconButton>
                  {cartItems.filter((elem) => elem.name === item.name).length}
                  <IconButton
                    color="success"
                    size="large"
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        data: item,
                      })
                    }
                  >
                    <AddCircleOutlinedIcon />
                  </IconButton>
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link className="link" to="/selected" style={{ color: "blue" }}>
                  <Button
                    variant="contained"
                    size="medium"
                    endIcon={<ArtTrackOutlinedIcon />}
                    onClick={() =>
                      dispatch({
                        type: "SELECTED_PRODUCT",
                        data: [item],
                      })
                    }
                  >
                    VIEW
                  </Button>
                </Link>
                &nbsp;
                <Button
                  variant="contained"
                  color="error"
                  size="medium"
                  endIcon={<RemoveShoppingCartOutlinedIcon />}
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_PRODUCT",
                      data: item,
                    })
                  }
                >
                  REMOVE
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ProductsCart;
