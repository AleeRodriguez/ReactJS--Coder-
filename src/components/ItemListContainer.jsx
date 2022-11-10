import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "./data.js";
import ItemList from "./ItemList.jsx";
export default function ItemListContainer({greeting}){
const {idcategory}= useParams();

const [productos, setProductos] = useState([]);

useEffect(() => {
  const productosPromise = new Promise((res, rej) => {
    setTimeout(() =>{
      res(productos);
    }, 2000);
  })

  productosPromise.then((res) => {
    if(idcategory){
      setProductos(res.filter((item) => item.category === idcategory));
    } else{
      setProductos(res);
    }
  });
}, [idcategory]);

return(
  <div style={{border:"1px solid blue "}}>
  <ItemList productos={productos}/>
  </div>
);}