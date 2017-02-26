import React from 'react';
import RaisedButton from './material_components/raised_button';
export default class Login extends React.Component {
  render(){
    return (
      <div className="paper-1 login-container">
        <h3>Login</h3>
        <RaisedButton>LOGIN WITH FACEBOOK</RaisedButton>
      </div>
    );
  }
}
