import React from 'react'
import './custombutton.style.scss'

const Custombutton =({children,isGoogleSignIn,inverted , ...otherprops})=>(
    <button  className={` ${inverted ? "inverted" :'' }
        ${isGoogleSignIn ? "google-sigin" :'' } custom-button`} {...otherprops}>
        {children}
    </button>
)
export default Custombutton;