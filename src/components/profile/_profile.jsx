import React from 'react';
import _ from 'lodash';
import ApplicationRoute from '../application_route';
import TblHdr from './profileTblHdr';
import TblRow from './profileTblRow';
import PageHeader from '../pageHeader';
import ContentArea from '../content_area';
import TextArea from '../material_components/formTextArea';
import BathroomList from './bathroomList'
import FirebaseController, {swirlFirebase} from '../../database/firebase_controller';
import GeoFire from 'geofire'

export default class Profile extends ApplicationRoute {
  constructor(){
    super();
    this.state={
      userData:null,
      bathrooms: null,
      comments: null,
    }
  }
  componentDidMount(){
    swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}`).on('value', (snapshot)=>{
      this.setState({
        userData:snapshot.val(),
      });
    });
    swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/bathrooms`).on('value',(snapshot)=>{
      this.setState({
        bathrooms: snapshot.val(),
        bathroomCount: _.size(snapshot.val()),
      });
    });
  }

  deleteBathroom(bathroomID){
    swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/leaderBoardPoints`).once('value',(snapshot) => {
      swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/leaderBoardPoints`).set(snapshot.val()-100);
    });
    swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/bathrooms/${bathroomID}`).remove();
    swirlFirebase.DATABASE.ref(`bathrooms/${bathroomID}`).remove();
    const geoFire = new GeoFire(swirlFirebase.DATABASE.ref('geolocation'))
    geoFire.remove(bathroomID)
  }

  deleteReview(reviewId, bathroomId){
    swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/reviews/${reviewId}`).remove();
    swirlFirebase.DATABASE.ref(`bathrooms/${bathroomId}/reviews/${reviewId}`).remove();
  }

  // some router stuff for an example
  render(){
    if(!this.state.userData){
      return null
    }
    console.log(this.state.userData);
    const {displayName, email, leaderBoardPoints}=this.state.userData;
    return(
      <ContentArea pageName="Profile">
        <div className="info-container">
          <div className="paper-1 lift">
            <table className="table">
              <TblHdr hdrTxt="Profile Info" />
              <TblRow profileDataName="Name:" profileData= {displayName}/>
              <TblRow profileDataName="email:" profileData= {email}/>
              <TblRow profileDataName="Points:" profileData={leaderBoardPoints} />
              <TblRow profileDataName="Rank:" profileData="25543" />
              <TblRow profileDataName="Number of reviews:" profileData="10" />
              <TblRow profileDataName="Bathrooms Uploaded:" profileData={this.state.bathroomCount} />
            </table>
            <table className="table">
              <TblHdr hdrTxt="Bio" />
              <TextArea elementID="bioText" labelName="Enter Bio Here" rowSize={20} colSize={105}/>
            </table>
            MY BATHROOMS
            <nav>
              <ul className="scrollBathrooms">
                {_.map(this.state.bathrooms, (bathroom, key) => (
                  <BathroomList
                    key={key}
                    deleteItem={() => {this.deleteBathroom(key)}}
                  >
                    {bathroom.bathroomName}
                  </BathroomList>
                ))}
              </ul>
            </nav>
            MY COMMENTS
            <nav>
              <ul className="scrollBathrooms">
                {_.map(this.state.userData.reviews, (review, key) => (
                  <BathroomList
                    key={key}
                    deleteItem={() => {this.deleteReview(key, review.bathroomId)}}
                  >
                    {review.text}
                  </BathroomList>
                ))}
              </ul>
            </nav>
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
