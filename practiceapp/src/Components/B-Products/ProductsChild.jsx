// import { Button } from "react-bootstrap";
import React from "react";
import "./products.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArtTrackOutlinedIcon from '@mui/icons-material/ArtTrackOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


const ProductsChild = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ width: 300 }} style={{ margin: "10px" }} className="mui-card">
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
          {item.name.length > 20 ? item.name.substr(0, 20) + "..." : item.name}
        </Typography>
        <Typography variant="h6" component="div">
          Price: ${item.price}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions style={{display:"flex", justifyContent:"center"}}>
        <Button
          variant="outlined"
          color="success"
          size="large"
          endIcon={<AddShoppingCartOutlinedIcon />}
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              data: item,
            })
          }
        >
          ADD
        </Button>
        &nbsp;
        <Link className="link" to="/selected" style={{ color: "blue" }}>
          <Button
            variant="outlined"
            size="large"
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
      </CardActions>
    </Card>

    // <div className="card">
    //   <img src={item.img} width="250px" height="350px" alt="" data-placement="top" title={item.name}/>
    //   <h5 title={item.name}>{item.name.substr(0, 25) + "..."}</h5>
    //   <h5>
    //     <b>Price: ${item.price}</b>
    //   </h5>
    //   <p>
    //     <Button className="add"
    //       onClick={() =>
    //         dispatch({
    //           type: "ADD_TO_CART",
    //           data: item,
    //         })
    //       }
    //     >
    //       Add to Cart
    //     </Button>
    //     &nbsp;&nbsp;
    //     <Button className="view"
    //       onClick={() =>
    //         dispatch({
    //           type: "SELECTED_PRODUCT",
    //           data: [item],
    //         })
    //       }
    //     >
    //       <Link className="link" to="/selected">View Product</Link>
    //     </Button>
    //     {/* {console.log("Cart: ", [item])} */}
    //   </p>
    // </div>
  );
};

export default ProductsChild;
