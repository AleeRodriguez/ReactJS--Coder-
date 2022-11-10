import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export default function Item({item}) {
    return(
        <div>
            <div className='Item' key={item.id}>
                {JSON.stringify(item)}
                <Link to={"/item/" + item.id}>Ir al item</Link>
            </div>
    </div>
    )
}