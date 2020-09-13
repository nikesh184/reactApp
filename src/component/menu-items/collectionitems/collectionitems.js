import React from 'react';
import Custombutton from '../../custombutton/custombutton';

import {addItem} from '../../../redux/cart/cart.action'
import {connect} from 'react-redux';
import './collectios.style.scss'


const CollectionItem=({item , addItem})=>{
     const  {id,Name,price}=item;
     return(
         

         <div className="collection-item">
         <div className="collection-footer">
              <span className="name">{Name}</span>
     <span className="price">{id}{price}</span>
  
         </div>
          <Custombutton  onClick={(item)=>addItem(item)} inverted >ADD TO CART </Custombutton>
     </div>
    ); 
}; 

const mapDispatchtoProps = dispatch => ({
     addItem: item => dispatch(addItem(item))
   });
export default connect(null , mapDispatchtoProps)(CollectionItem);