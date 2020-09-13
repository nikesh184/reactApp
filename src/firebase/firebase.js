import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const Config ={
    apiKey: "AIzaSyDRuKg9Ikpl0nJ4K4Jqf8b7VVrP6tI7oyc",
    authDomain: "react-app-214ca.firebaseapp.com",
    databaseURL: "https://react-app-214ca.firebaseio.com",
    projectId: "react-app-214ca",
    storageBucket: "react-app-214ca.appspot.com",
    messagingSenderId: "478396952027",
    appId: "1:478396952027:web:2cf2727db2d67a2e200bfe",
    measurementId: "G-F1EF9LCDH2"
};

export const createUserProfileDocument = async (userAuth , additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName , email} = userAuth;
        const creatDat = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                creatDat,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.messagefirebase)
        }

    }
    
    return userRef;

};

firebase.initializeApp(Config);
export const firestore=firebase.firestore();
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });
  
export const signInWithGoogle=()=>auth.signInWithPopup(provider)
export default firebase;


