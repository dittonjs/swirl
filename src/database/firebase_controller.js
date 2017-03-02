import * as firebase from "firebase";
import secrets       from "./secrets.js";
import {hashHistory} from 'react-router'
const APP = firebase.initializeApp(secrets);
const DATABASE = APP.database();
const AUTH     = firebase.auth();

export default class FirebaseController {
  static verifyLoggedIn(callback){
    AUTH.onAuthStateChanged(callback);
  }

  static getCurrentUser(){
    return AUTH.currentUser;
  }

  static signIn(){
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    AUTH.signInWithRedirect(provider);
  }

  static signOut(){
    AUTH.signOut().then(()=>{
      hashHistory.push('/login');
    }).catch((err)=>{
      console.log(err);
    });
  }

  static getRedirectResult(res, err){
    AUTH.getRedirectResult().then(res).catch(err);
  }
}
