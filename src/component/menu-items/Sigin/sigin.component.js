import React, { Component } from 'react'
import Forminput from '../FormInput/forminput.component';
import Custombutton from '../../custombutton/custombutton'
import './sigin.component.scss'
import {auth, signInWithGoogle} from '../../../firebase/firebase'
export default class Sigin extends Component {
    constructor(){
        super()
        this.state={
           email:'',
            password:''
        }
    }
    handelSubmit = async e =>{
        e.preventDefault();
        const {email ,password} = this.state;

        try {
          await auth.signInWithEmailAndPassword(email , password)
            this.setState({email:"", password:""});
        }catch (error){
          console.log("error.message sigin")
        }
    };
    handelChang=(e)=>{
        const {value,name}=e.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sigin">
              <h1 className="title">I alrady have an Account</h1>
              <span>Sigin with your email and password</span>
              <form onSubmit={this.handelSubmit}>
                  <Forminput 

                    name="email" 
                    value={this.state.email} 
                    type="email" 
                    required
                    handelChange={this.handelChang}
                    label="email"
                    />

                  <Forminput 

                    name="password" 
                    value={this.state.password} 
                    type="password" 
                    label="password"
                    required
                    handelChange={this.handelChang} 
                    />
                  <div className="button">
                    <Custombutton type="submit" >Sigin</Custombutton>
                      
                    <Custombutton onClick={signInWithGoogle} isGoogleSignIn >Signinwith Gogle </Custombutton>
                  </div>

                 
                </form>
               
            </div>
                
        )
    }
}
