import React from 'react';
import Sigin from '../../../component/menu-items/Sigin/sigin.component';
import SignUp from "../../../component/SignUp/signup.component";
import './sign-and-signout.style.scss'
const SiginandSignup =()=>(

    <div className="signin-and-signup">
      <Sigin/>
      <SignUp/>
    </div>
)
export default SiginandSignup;