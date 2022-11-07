import React from "react";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <div style={{ background: "linear-gradient(180deg, rgba(00, 0, 1, 14) 15%, rgba(0, 22, 55, 1) 100%)" }}>
      <h1 style={{ display: "flex", justifyContent: " space-around", color: "#195da2", justifyContent: "center" }}>
        Comida Para Oficina
        <img style={{ height: "50px" }} src={require("../Imagenes/logo.png")} alt="Logo" />
      </h1>
      <div style={{ display: "flex", justifyContent: " space-around" }}></div>
      <ul style={{ display: "flex", justifyContent: " space-evenly", listStyle: "none", fontWeight: "bold" }}>
        <li style={{ textDecoration: "none" }}>
          <a href="../App.js" style={{ color: "white" }}>
            Home
          </a>
        </li>
        <li style={{ textDecoration: "none", color: "white" }}>
          <a href="../App.js" style={{ color: "white" }}>
            Products
          </a>
        </li>
        <CartWidget />
      </ul>
    </div>
  );
}
