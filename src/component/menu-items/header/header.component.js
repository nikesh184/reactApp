import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import Image from '../image/home-page.png';
import './header.style.scss';
import CartIcon from '../../card-icon/card-icon.component';
import CartDroupdown from '../../card-droupdown/card-droupdown'
import {auth} from '../../../firebase/firebase';
const Header =({currentUser ,hidden})=>(
    <div className="header">
        <Link to="/">
            <img src={Image} alt="notFound"className="logo-container"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/shop" className="option">
                CONTAIN
            </Link>
            {
                currentUser ?(
                <div className="option" onClick={()=>auth.signOut()}>
                    SIGNOUT
                </div>
                ):(
                <Link  className="option" to='/sigin'>
                    SIGNIN
                </Link>
                )
            }
            <CartIcon/>
        </div>
        {
            hidden ?  null :<CartDroupdown/> 
        }
       
    </div>
)
const mapStateToProps=({user :{currentUser} , cart :{ hidden }})=>({
    currentUser ,
    hidden
    
})
export default connect(mapStateToProps)(Header);