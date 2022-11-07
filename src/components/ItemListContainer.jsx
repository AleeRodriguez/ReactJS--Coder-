import React from "react";

export default function ItemListContainer({ greeting }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}> {greeting}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img style={{ height: "300px" }} src={require("../Imagenes/construccion.jpg")} alt="construccion" />
      </div>
    </>
  );
}
