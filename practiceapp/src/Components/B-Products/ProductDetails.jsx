import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


const ProductDetails = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.productsReducer.selected);
  console.log(details);
  return (
    <div style={{ display: "flex", margin: "100px" }}>
      {details.map((item) => {
        return (
          <React.Fragment>
            <Card sx={{ width: 1200 }} style={{ margin: "10px" }}>
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
                    maxHeight: "400px",
                  }}
                  component="img"
                  alt=""
                  image={item.img}
                />
<div>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    {item.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="left"
                  >
                    Author: {item.author}
                  </Typography>
                  <Typography variant="h6" component="div" align="left">
                    Price: ${item.price}
                  </Typography>
                  <Typography variant="h6" component="div" align="left">
                    Category: {item.category}
                  </Typography>
                  <Typography variant="h6" component="div" align="left">
                    Type: {item.type}
                  </Typography>
                  <br />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="justify"
                  >
                    {item.description}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<AddShoppingCartOutlinedIcon />}
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        data: item,
                      })
                    }
                  >
                    ADD TO CART
                  </Button>
                </CardActions></div>
              </div>
            </Card>

            {/* <div>
              <img src={item.img} width="400px" height="500px" alt="" />
              <br />
              <br />
              <Button
                variant="success"
                style={{ width: "400px" }}
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    data: item,
                  })
                }
              >
                Add to Cart
              </Button>
            </div>
            <div style={{ margin: "0px 100px" }}>
              <h3>Title: {item.name}</h3>
              <h4>Author: {item.author}</h4>
              <p style={{ textAlign: "justify" }}>
                <b>Description:</b> {item.description}
              </p>
            </div> */}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProductDetails;
