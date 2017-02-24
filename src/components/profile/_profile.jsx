import React from 'react';
import _ from 'lodash';
import TblHdr from './profileTblHdr';
import TblRow from './profileTblRow';

export default class Profile extends React.Component {

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
