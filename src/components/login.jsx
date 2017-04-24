import React        from 'react';
import MaterialButton from './material_components/material_button';
import TextField    from './material_components/text_field';
import FirebaseController from '../database/firebase_controller';
import {swirlFirebase} from '../database/firebase_controller';
import { hashHistory } from 'react-router';
export default class Login extends React.Component {
  signInWithFacebook(){
    window.localStorage.setItem("pendingRedirect", "1");
    FirebaseController.signIn()
  }
  signInUserName(){
    swirlFirebase.AUTH.signInWithEmailAndPassword(this.refs.email.getValue(), this.refs.password.getValue()).then((user)=>{
      window.localStorage.setItem('swirlUserId', user.uid);
      hashHistory.push('/profile');
    });
  }
  render(){
    return (
      <div className="login-container">
        <div className="paper-1 lift">
          <h3>Login</h3>
          <TextField placeholder="Email" ref="email"/>
          <TextField placeholder="Password" type="password" ref="password"/>
          <MaterialButton
            type="flat"
            className="login-button"
            onClick={() => this.signInUserName()}
          >
            SIGN IN
          </MaterialButton>
        </div>
        <MaterialButton
          className="login-with-facebook-button"
          onClick={()=>this.signInWithFacebook()}
        >
          SIGN IN WITH FACEBOOK
        </MaterialButton>

        <MaterialButton
          className="login-with-facebook-button"
          onClick={()=>hashHistory.push('register')}
        >
          REGISTER
        </MaterialButton>
      </div>
    );
  }
}
