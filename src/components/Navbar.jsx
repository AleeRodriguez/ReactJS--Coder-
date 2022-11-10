import React from "react";
import CartWidget from "./CartWidget";
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="Header">
      <h1 className="Titulo">
        Comida Para Oficina
        <img style={{ height: "50px" }} src={require('../Imagenes/logo.png')} alt="Logo" />
      </h1>
      <div style={{ display: "flex", justifyContent: " space-around" }}></div>
      <ol className="secciones">
        <li>
          <a href="../App.js" style={{ color: "white" }}>
            Home
          </a>
        </li>
        <li>
          <a href="../App.js" style={{ color: "white" }}>
            Productos
          </a>
        </li>
        <li>
          <a href="../App.js" style={{ color: "white" }}>
            Bebidas
          </a>
        </li>
        <li>
          <a href="../App.js" style={{ color: "white" }}>
            Nosotros
          </a>
        </li>
        <div className="Carrito">
        <CartWidget/>
        </div>
      </ol>
    </div>
);
}