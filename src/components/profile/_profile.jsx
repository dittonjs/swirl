import React from 'react';
import _ from 'lodash';
import ApplicationRoute from '../application_route';
import TblHdr from './profileTblHdr';
import TblRow from './profileTblRow';

export default class Profile extends ApplicationRoute {

  // some router stuff for an example
  render(){
    return(
      <div className="info-container">
        <table className="table">
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
