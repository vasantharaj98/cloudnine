import React from "react";
import Button from "@mui/material/Button";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./style.css";

const fabButton = ({ setSelectid, path, value }) => {
  return (
    <Link onClick={() => setSelectid("Our Menu")} to={path}>
      <Button
        className="fabButton"
        variant="contained"
        size="large"
        sx={{ 
          background: "#DB241E", 
          borderRadius: "50px", 
          fontSize: 18,
          ':hover':{
            bgcolor: "#DB241E",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ShoppingCartOutlined
            sx={{ color: "#fff", marginRight: 1 }}
          ></ShoppingCartOutlined>
          {value}
        </div>
      </Button>
    </Link>
  );
};

export default fabButton;
