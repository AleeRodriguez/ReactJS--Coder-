import React from "react";
import Image  from "../Imagenes/logo.png";
import CartWidget from './CartWidget'




export default function Navbar() {
  return (
    <div style={{ background: "linear-gradient(180deg, rgba(00, 0, 1, 14) 15%, rgba(0, 22, 55, 1) 100%)",}}>
      <h1 style={{display:"flex", justifyContent:" space-around"}}>Comida Para Oficina</h1>
      <div style={{display: "flex",justifyContent:" space-around"}}>
        <img style={{height:"80px", display: "flex",justifyContent:" space-around"}} src={require('../Imagenes/logo.png')} alt="Logo" />
      </div>
      <ul style={{ display: "flex", display: "flex", justifyContent:" space-around", listStyle:"none", fontWeight:"bold"}}>
        <li style={{textDecoration: "none"}}>
          <a href="http://google.com" style={{ color:"white"}}>Home</a>
        </li>
        <li style={{textDecoration: "none", color:"white"}}>
          <a href="http://google.com" style={{ color:"white"}}>Products</a>
        </li>
        <CartWidget/>
      </ul>
    </div>
    
  )
  }
