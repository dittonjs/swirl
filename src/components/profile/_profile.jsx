import React from 'react';
import { hashHistory,  Link } from 'react-router';
export class Profile extends React.Component {

  goToLogin(){
    hashHistory.push("/login");
  }
  // some router stuff for an example
  render(){
    return(
      <div>
        <Link to="/login">Login</Link>
        Profile
      </div>
    )
  }
}
