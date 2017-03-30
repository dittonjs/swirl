import React from 'react';
import _ from 'lodash';
import ApplicationRoute from '../application_route';
import TblHdr from './profileTblHdr';
import TblRow from './profileTblRow';
import PageHeader from '../pageHeader';
import ContentArea from '../content_area';
import TextArea from '../material_components/formTextArea';
import FirebaseController, {swirlFirebase} from '../../database/firebase_controller';

export default class Profile extends ApplicationRoute {
  constructor(){
    super();
    this.state={userData:null}
  }
  componentDidMount(){
    swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}`).once('value').then((snapshot)=>{
      this.setState({
        userData:snapshot.val()
      });
    });
    swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/bathrooms`).once('value').then((snapshot)=>{
      this.setState({
        bathroomCount: _.size(snapshot.val()),
      });
    });
  }
  // some router stuff for an example
  render(){
    if(!this.state.userData){
      return null
    }
    const {displayName, email}=this.state.userData;
    return(
      <ContentArea pageName="Profile">
        <div className="info-container">
          <div className="paper-1 lift">
            <table className="table">
              <TblHdr hdrTxt="UserName" />
              <TblRow profileDataName="Name:" profileData= {displayName}/>
              <TblRow profileDataName="email:" profileData= {email}/>
              <TblRow profileDataName="Points:" profileData="500" />
              <TblRow profileDataName="Rank:" profileData="25543" />
              <TblRow profileDataName="Number of reviews:" profileData="10" />
              <TblRow profileDataName="Bathrooms Uploaded:" profileData={this.state.bathroomCount} />
            </table>
            <table className="table">
              <TblHdr hdrTxt="Bio" />
              <TextArea elementID="bioText" labelName="Enter Bio Here" rowSize={20} colSize={105}/>
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
