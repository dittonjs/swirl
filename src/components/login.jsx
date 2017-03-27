import React        from 'react';
import MaterialButton from './material_components/material_button';
import TextField    from './material_components/text_field';
import FirebaseController from '../database/firebase_controller';
export default class Login extends React.Component {
  signInWithFacebook(){
    window.localStorage.setItem("pendingRedirect", "1");
    FirebaseController.signIn()
  }

  render(){
    return (
      <div className="login-container">
        <div className="paper-1 lift">
          <h3>Login</h3>
          <TextField placeholder="Email" />
          <TextField placeholder="Password" type="password"/>
          <MaterialButton
            type="flat"
            className="login-button"
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
      </div>
    );
  }
}
