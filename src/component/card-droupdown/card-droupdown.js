import React from 'react';
import Custombutton from '../custombutton/custombutton'
import {connect} from "react-redux"
import CartItem from '../cart-item/cart-item-component'
import './card-droupdown.scss';


const CartDroupdown =({cartItems})=>(
    
    <div className="cart-dropdown"> 
        <div className="cart-items">
            {
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
        <Custombutton> CHECKOUT </Custombutton>
    </div>
)
   

const mapSttetoProps =({cart:{cartItems}} )=>({
    cartItems
})
export default connect(mapSttetoProps)(CartDroupdown) ; 