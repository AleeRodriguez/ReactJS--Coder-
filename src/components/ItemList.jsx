import React from 'react';
import { productos } from './data';
import Item from './Item';

export default function ItemList({}){
    return(
        <div>
            {!productos.length && "Loading..."}
            {productos.map((item)=> (
                <Item item={item}/>
            )
            
            )}
        </div>
    )
}