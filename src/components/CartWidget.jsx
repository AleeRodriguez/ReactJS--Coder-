import React from "react";
import Imagen from '../Imagenes/carritoCompras2.png';

export default function CartWidget() {
    return(
        <>
        <div style={{paddingTop:"0px"}}>
            <img style={{marginTop: "-22px",height:"60px", display:"flex"}} src={require('../Imagenes/carritoCompras2.png')} alt="Carrito de compras" />
        </div>

       
    </>
    )
    
}