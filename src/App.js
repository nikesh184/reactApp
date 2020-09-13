import React from 'react';
import './App.css';
import Homepage from "../src/page/homepage/homepage.component";
import {Route ,Switch , Redirect} from "react-router-dom";
import ShopPage from '../src/page/homepage/shop/shop.component';
import Header from './component/menu-items/header/header.component';
import SiginandSignup from './page/homepage/sign and signout component/sign and signout';
import {auth,createUserProfileDocument} from "../src/firebase/firebase";
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';


class App extends React.Component{
unsubscribeFromAuth = null;

componentDidMount(){
  const {setCurrentUser}=this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async  userAuth=>{
    if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(sanpShot =>{
          setCurrentUser(
            {
                id:sanpShot.id,
                ...sanpShot.data()
            });
        });
    } 
      setCurrentUser(userAuth);
   
  });
}
componentWillUnmount(){
 this.unsubscribeFromAuth();
}
render(){
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/sigin' 
                render ={
                  ()=>this.props.currentUser ?
                  (<Redirect to='/' />):
                  (<SiginandSignup />)
               }
        />
      </Switch>
    </div>
     
)
}
  
};
const mapStateToProps = ({user})=>({
  currentUser:user.currentUser
});
 const mapdispatchToProps =dispatch=>({
  setCurrentUser:user =>dispatch(setCurrentUser(user))
 });
export default connect(mapStateToProps , mapdispatchToProps)(App);