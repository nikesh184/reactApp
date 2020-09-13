import React from 'react';
import Forminput from "../menu-items/FormInput/forminput.component";
import Custombutton from '../custombutton/custombutton';
import {auth , createUserProfileDocument} from '../../firebase/firebase';
import "./signup.style.scss"

class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName :'',
            email : '',
            Password :'',
            conformpassword :''
        }
    }
    handleSubmit=async e=>{
        e.preventDefault();
        const {displayName,email,Password,conformpassword}=this.state;
        if(Password !== conformpassword){
            alert("password don't match ")
            return;
        }
        try {
            const {user} = auth.createUserWithEmailAndPassword(email,Password);

           await  createUserProfileDocument(user, {displayName})
           this.setState({
                displayName :'',
                email : '',
                Password :'',
                conformpassword :''
           })
        } catch (error){
            console.log(error)
        }

       
    }
    handelChange =(e)=>{
        const {name ,value}=e.target
        this.setState({[name]:value});
    }

    render(){
        const {displayName,email,Password,conformpassword}=this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a Account </h2>
                <span>Sig-Up With your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <Forminput 
                        type="text"
                        value={displayName}
                        name="displayName"
                        onChange={this.handelChange}
                        label="Name"
                        required
                    />
                    <Forminput 
                        type="email"
                        value={email}
                        name="email"
                        onChange={this.handelChange}
                        label="email"
                        required
                    />
                     <Forminput 
                        type="password"
                        value={Password}
                        name="Password"
                        onChange={this.handelChange}
                        label="Password"
                        required
                    />
                    <Forminput 
                        type="password"
                        value={conformpassword }
                        name="conformpassword"
                        onChange={this.handelChange}
                        label="conformpassword "
                        required
                    />
                    <Custombutton type="submit" > SIGNUP </Custombutton>
                </form>
                
            </div>
        )
    }
    
}
export default SignUp; 