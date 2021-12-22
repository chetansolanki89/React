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
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import ArtTrackOutlinedIcon from '@mui/icons-material/ArtTrackOutlined';


const ProductsCart = () => {
  const cartItems = useSelector((state) => state.productsReducer.cart);
  const dispatch = useDispatch();

  console.log(cartItems);
  return (
    <React.Fragment>
      <h4>Cart Items</h4>
      <div className="parent">
        {cartItems.map((item) => {
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
                  Price: ${item.price}
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

            // <div className="card">
            //   <img src={item.img} width="250px" height="350px" alt="" />
            //   <h4>{item.name.substr(0, 20) + "..."}</h4>
            //   <h5>
            //     <b>Price: ${item.price}</b>
            //   </h5>
            //   <p>
            //     <Button className="view"
            //       onClick={() =>
            //         dispatch({
            //           type: "SELECTED_PRODUCT",
            //           data: [item],
            //         })
            //       }
            //     >
            //       <Link className="link" to="/selected">
            //         View Product
            //       </Link>
            //     </Button>
            //     &nbsp;&nbsp;
            //     <Button className="remove"
            //       onClick={() =>
            //         dispatch({
            //           type: "REMOVE_PRODUCT",
            //           data: item,
            //         })
            //       }
            //     >
            //       Remove Product
            //     </Button>
            //     {/* {console.log("Cart: ", [item])} */}
            //   </p>
            // </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ProductsCart;
