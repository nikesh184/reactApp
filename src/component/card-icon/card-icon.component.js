import React from 'react';
import Image from '../../component/menu-items/image/shopping-bag.jpg';
import {connect} from 'react-redux';
import {ToggleCarthidden} from '../../redux/cart/cart.action'
import './card-icon.component.scss'


const CartIcon =({ToggleCarthidden})=>(
    <div className="cart-icon" onClick={ToggleCarthidden}>
         <img src={Image} alt="notFound" className="shopping-icon"/>
        <span  className="item-count">0</span>
    </div>
)
const mapDispatchToProps = dispatch =>({
    ToggleCarthidden: () => dispatch(ToggleCarthidden())
});

export default connect(null , mapDispatchToProps)(CartIcon);