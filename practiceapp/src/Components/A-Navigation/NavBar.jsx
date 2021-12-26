import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { InputGroup, FormControl } from "react-bootstrap";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const NavBar = ({setSearch}) => {
  const count = useSelector((state) => state.productsReducer.cart.length);
  console.log("Cart count: ", count);
  // console.log("Search: ", search);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10px",
      }}
    >
      <Link className="link" to="/">
        <Button
          variant="outlined"
          color="success"
          size="large"
          endIcon={<ListOutlinedIcon />}
        >
          Products
        </Button>
      </Link>

      <TextField
        id="outlined-basic"
        style={{}}
        label="Search"
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Link className="link" to="/cart">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={count} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Link>
    </div>
  );
};

export default NavBar;
