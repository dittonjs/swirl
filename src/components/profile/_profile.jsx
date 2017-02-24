import React from 'react';
<<<<<<< HEAD
import { hashHistory,  Link } from 'react-router';
export class Profile extends React.Component {
=======
import _ from 'lodash';
import TblHdr from './profileTblHdr';
import TblRow from './profileTblRow';

export default class Profile extends React.Component {

  goToLogin(){
    hashHistory.push("/login");
  }
  // some router stuff for an example
  render(){
    return(
      <div>
        <table>
          <TblHdr hdrTxt="UserName Profile" />
          <TblRow profileDataName="Name:" profileData="Britt Schmidt" />
          <TblRow profileDataName="Points:" profileData="500" />
          <TblRow profileDataName="Rank:" profileData="25543" />
          <TblRow profileDataName="Number of reviews:" profileData="10" />
          <TblRow profileDataName="Bathrooms Uploaded:" profileData="3" />
          <TblRow profileDataName="Bio:" profileData="John Jacob Jingleheimer is my cousin" />
        </table>
      </div>
    );
  }
}
// some more example router stuff
// goToLogin(){
//   hashHistory.push("/login");
// }
// <Link to="/login">Login</Link>
