import React from 'react';
import './cart-item-style.scss' ;
//<img src={} alt="item"/>
const  CartItem =({item:{price , Name , quantity}})=>(
    <div className="cart-item">
    
        <div className='item-detiles'>
            <span className="name">{Name}</span>
            <span className="price">{quantity}*{price}</span>

        </div>

    </div>
)
export default CartItem;
