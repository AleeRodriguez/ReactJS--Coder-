import React from "react";

export default function Navbar({ color }) {
  return (
    <div style={{ backgroundColor: color, marginTop:"-21px" }}>
      <h1 style={{display:"flex", justifyContent:" space-around"}}>Comida Para Oficina</h1>
      <ul style={{ display: "flex", display: "flex", justifyContent:" space-around", listStyle:"none", fontFamily:"bold"}}>
        <li style={{textDecoration: "none"}}>
          <a href="http://google.com" style={{ color:"white"}}>Home</a>
        </li>
        <li style={{textDecoration: "none", color:"white"}}>
          <a href="http://google.com" style={{ color:"white"}}>Products</a>
        </li>
        <li style={{textDecoration: "none"}}>
          <a href="http://google.com" style={{ color:"white"}}>Cart</a>
        </li>
      </ul>
    </div>
  );
}
