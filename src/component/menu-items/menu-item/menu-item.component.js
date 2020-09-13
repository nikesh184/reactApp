import React from 'react';
import {withRouter} from "react-router-dom"
import './menu-item.style.scss'
const Menuitem=({title,imageUrl,history,LinkUrl,match})=>(
         <div style={{
                backgroungdImage:`url(${imageUrl})`
         }}
            
            className="menu-item" onClick={()=>{history.push(`${match.url}${LinkUrl}`)}}>
            <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
       
)
export default withRouter(Menuitem); 