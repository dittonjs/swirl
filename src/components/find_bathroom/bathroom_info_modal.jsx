import React from 'react';
import _     from 'lodash';
import MaterialButton from '../material_components/material_button';
import FormTextArea from '../material_components/formTextArea.jsx';
import {swirlFirebase} from '../../database/firebase_controller';

export default class BathroomInfoModal extends React.Component {
  constructor(){
    super();
    this.state = {
      comments: {},
      thumb: false
    }
  }

  componentWillMount(){
    swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/reviews`).once('value', (snapshot)=>{
      this.setState({comments: snapshot.val()});
    });
  }

  thumb(value){
    const userId = this.props.bathroom.creatorId;
    console.log(this.props.bathroom);
    swirlFirebase.DATABASE.ref(`users/${userId}/leaderBoardPoints`).once('value',(snapshot) => {
      if(value){
        swirlFirebase.DATABASE.ref(`users/${userId}/leaderBoardPoints`).set(snapshot.val() + 10);
      } else {
        swirlFirebase.DATABASE.ref(`users/${userId}/leaderBoardPoints`).set(snapshot.val() - 10);
      }
      this.setState({thumb: true});
    });
  }

  saveComment(){
    const text = this.textarea.getValue();

    const comment = {
      text,
      userId: window.localStorage.getItem('swirlUserId'),
      bathroomId: this.props.bathroom.ID,
<<<<<<< HEAD
=======
	    userName:FirebaseController.getCurrentUser().displayName
>>>>>>> 8ac9da45fed23ec5b50df811463ead4caad07e79
    }
    const reviewKey = swirlFirebase.DATABASE.ref().child(`bathroom/${this.props.bathroom.ID}/reviews`).push().key;
    swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/reviews/${reviewKey}`).set(comment);
    swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/reviews/${reviewKey}`).set(comment);
<<<<<<< HEAD
=======
    var userName = FirebaseController.getCurrentUser().displayName;
    console.log(userName);
>>>>>>> 8ac9da45fed23ec5b50df811463ead4caad07e79
    this.props.closeModal();
  }

  saveThumbUp(){
    const bathroomCreatorID = swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/creatorID`).once('value');
    debugger
    swirlFirebase.DATABASE.ref(`thumbs/${this.props.bathroom.ID}/${window.localStorage.getItem('swirlUserId')}`).once('value').then((snapshot)=>{
      debugger
      if(!snapshot.val()){
        const thumbs = {
          thumbUp: true,
          thumbDown: false,
        }
        swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/bathrooms/${this.props.bathroom.ID}/thisUserThumbed`).set(true);
        swirlFirebase.DATABASE.ref(`thumbs/${this.props.bathroom.ID}/${window.localStorage.getItem('swirlUserId')}`).set(thumbs);
        swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/numThumbsUp`).once('value',(snapshot) => {
          swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/numThumbsUp`).set(snapshot.val()+1);
        });
        swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/leaderBoardPoints`).once('value',(snapshot) => {
          swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/leaderBoardPoints`).set(snapshot.val()+10);
        });
        swirlFirebase.DATABASE.ref(`users/${bathroomCreatorID}/leaderBoardPoints`).once('value',(snapshot) => {
          swirlFirebase.DATABASE.ref(`users/${bathroomCreatorID}/leaderBoardPoints`).set(snapshot.val()+10);
        });
      } else if(snapshot.val().thumbDown){
        const thumbs = {
          thumbUp: true,
          thumbDown: false,
        }
        swirlFirebase.DATABASE.ref(`thumbs/${this.props.bathroom.ID}/${window.localStorage.getItem('swirlUserId')}`).set(thumbs);
        swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/numThumbsUp`).once('value',(snapshot) => {
          swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/numThumbsUp`).set(snapshot.val()+1);
        });
        swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/numThumbsDown`).once('value',(snapshot) => {
          swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/numThumbsDown`).set(snapshot.val()-1);
        });
        swirlFirebase.DATABASE.ref(`users/${bathroomCreatorID}/leaderBoardPoints`).once('value',(snapshot) => {
          swirlFirebase.DATABASE.ref(`users/${bathroomCreatorID}/leaderBoardPoints`).set(snapshot.val()+20);
        });
      }
    });
  }

  saveThumbDown(){
    const bathroomCreatorID = swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/creatorID`).once('value');
    swirlFirebase.DATABASE.ref(`thumbs/${this.props.bathroom.ID}/${window.localStorage.getItem('swirlUserId')}`).once('value').then((snapshot)=>{
      if(!snapshot.val()){
        const thumbs = {
          thumbUp: false,
          thumbDown: true,
        }
        swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/bathrooms/${this.props.bathroom.ID}/thisUserThumbed`).set(true);
        swirlFirebase.DATABASE.ref(`thumbs/${this.props.bathroom.ID}/${window.localStorage.getItem('swirlUserId')}`).set(thumbs);
        swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/numThumbsDown`).once('value',(snapshot) => {
          swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/numThumbsDown`).set(snapshot.val()+1);
        });
        swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/leaderBoardPoints`).once('value',(snapshot) => {
          swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/leaderBoardPoints`).set(snapshot.val()+10);
        });
        swirlFirebase.DATABASE.ref(`users/${bathroomCreatorID}/leaderBoardPoints`).once('value',(snapshot) => {
          swirlFirebase.DATABASE.ref(`users/${bathroomCreatorID}/leaderBoardPoints`).set(snapshot.val()-10);
        });
      } else if(snapshot.val().thumbUp){
        const thumbs = {
          thumbUp: false,
          thumbDown: true,
        }
        swirlFirebase.DATABASE.ref(`thumbs/${this.props.bathroom.ID}/${window.localStorage.getItem('swirlUserId')}`).set(thumbs);
        swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/numThumbsDown`).once('value',(snapshot) => {
          swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/numThumbsDown`).set(snapshot.val()+1);
        });
        swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/numThumbsUp`).once('value',(snapshot) => {
          swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/numThumbsUp`).set(snapshot.val()-1);
        });
        swirlFirebase.DATABASE.ref(`users/${bathroomCreatorID}/leaderBoardPoints`).once('value',(snapshot) => {
          swirlFirebase.DATABASE.ref(`users/${bathroomCreatorID}/leaderBoardPoints`).set(snapshot.val()-20);
        });
      }
    });
  }

  render(){

    return (
      <div className="paper-4 bathroomInfoModal">
        <h2>
          {this.props.bathroom.bathroomName}
        </h2>
        <div>
          Running Water: {this.props.bathroom.runningWater ? "Yes" : "No"}
        </div>
        <div>
          Is Clean: {this.props.bathroom.isClean ? "Yes" : "No"}
        </div>
        <div>
          Baby Station: {this.props.bathroom.babyStation ? "Yes" : "No"}
        </div>
        <div>
          Handicap: {this.props.bathroom.handicap ? "Yes" : "No"}
        </div>
        <div className="formElement">
            <div className="elementBottom">
<<<<<<< HEAD
                <MaterialButton onClick={() => {this.saveThumbUp()}}><i className="material-icons">thumb_up</i></MaterialButton>
                <MaterialButton onClick={() => {this.saveThumbDown()}}><i className="material-icons">thumb_down</i></MaterialButton>
=======
                { !this.state.thumb ? <div>
                  <MaterialButton onClick={() => this.thumb(true)}><i className="material-icons">thumb_up</i></MaterialButton>
                  <MaterialButton onClick={() => this.thumb(false)}className="redButton"><i className="material-icons">thumb_down</i></MaterialButton>
                </div> : null }
>>>>>>> 8ac9da45fed23ec5b50df811463ead4caad07e79
                <FormTextArea ref={el=>{this.textarea=el}} elementID="reviewText" labelName="Add a comment"/>
            </div>
        </div>
        <h4>Comments</h4>
        <div className="comments">
          {
            _.map(this.state.comments, (comment, key) => {
              return (
                <div key={key} className="comment">{comment.text}</div>
              );
            })
          }
        </div>
        <MaterialButton className="closeButton" type="flat"
          onClick={this.props.closeModal}>
          CLOSE
        </MaterialButton>
        <MaterialButton className="saveButton" type="flat"
          onClick={() => {this.saveComment()}}>
          SAVE
        </MaterialButton>
      </div>
    );
  }
}
