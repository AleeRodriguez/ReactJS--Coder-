import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../components/data';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const { iditem } = useParams();
  const [productos, setProductos] = useState({});

  useEffect(() => {
    const productos = new Promise((res, rej) => {
      res(productos());
    });
    productos.then((res) => {
      productos(res.find((item) => item.id === iditem));
    });
  }, [iditem]);

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
}
