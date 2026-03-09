import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav style={{}}>
        <div style={{
          width:"100vw"
        }}>
        <h1
          style={{
            color: "#b5302c",
            fontSize: "180px",
            textAlign: "center",
            fontFamily: "sans-serif",
            letterSpacing: "-10px",
          }}
        >
          Flavor Fusion
        </h1>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginLeft: "170px",
            marginTop: "-10px",
            fontFamily: "unset",
            fontWeight: "400",
            fontSize:"20px"
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Home
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/menu">
            Menu
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            About
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/reservation"
          >
            Reservation
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
