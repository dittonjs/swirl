import React        from 'react';
import MaterialButton from './material_components/material_button';
import TextField    from './material_components/text_field';
import FirebaseController from '../database/firebase_controller';
import { hashHistory } from 'react-router';
import { swirlFirebase } from '../database/firebase_controller';
export default class Register extends React.Component {
  registerUserName(){
    if(this.refs.password.getValue() == this.refs.confirm.getValue()){
      swirlFirebase.AUTH.createUserWithEmailAndPassword(this.refs.email.getValue(), this.refs.password.getValue()).then((user) => {
        window.localStorage.setItem('swirlUserId', user.uid);
        swirlFirebase.DATABASE.ref('users/' + user.uid).set({
          UID: user.uid,
          displayName: user.email,
          email: user.email,
          leaderBoardPoints: 0
        });
        hashHistory.push('/profile');
      });
    }
  }

  render(){
    return (
      <div className="login-container">
        <div className="paper-1 lift">
          <h3>Register</h3>
          <TextField placeholder="Email" ref="email"/>
          <TextField placeholder="Password" type="password" ref="password"/>
          <TextField placeholder="Confirm Password" type="password" ref="confirm"/>
          <MaterialButton
            type="flat"
            className="login-button"
            onClick={() => this.registerUserName()}
          >
            Register
          </MaterialButton>
        </div>
        <MaterialButton
          className="login-with-facebook-button"
          onClick={()=> hashHistory.push('login')}
        >
          TO LOGIN PAGE
        </MaterialButton>
      </div>
    );
  }
}
