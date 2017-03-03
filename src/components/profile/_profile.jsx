import React from 'react';
import _ from 'lodash';
import ApplicationRoute from '../application_route';
import TblHdr from './profileTblHdr';
import TblRow from './profileTblRow';
import PageHeader from '../pageHeader';
import ContentArea from '../content_area';
import TextField from '../material_components/text_field';

export default class Profile extends ApplicationRoute {

  // some router stuff for an example
  render(){
    return(
      <ContentArea pageName="Profile">
        <div className="info-container">
          <div className="paper-3 lift">
            <table className="table">
              <TblHdr hdrTxt="UserName" />
              <TblRow profileDataName="Name:" profileData="Britt Schmidt" />
              <TblRow profileDataName="Points:" profileData="500" />
              <TblRow profileDataName="Rank:" profileData="25543" />
              <TblRow profileDataName="Number of reviews:" profileData="10" />
              <TblRow profileDataName="Bathrooms Uploaded:" profileData="3" />
            </table>
          </div>
        </div>
        <div className="info-container">
          <div className="paper-1 lift">
            <table className="table">
              <TblHdr hdrTxt="Bio" />
              <TextField placeholder={this.props.bioInfo}/>
            </table>
          </div>
        </div>
      </ContentArea>
    );
  }
}
// some more example router stuff
// goToLogin(){
//   hashHistory.push("/login");
// }
// <Link to="/login">Login</Link>
