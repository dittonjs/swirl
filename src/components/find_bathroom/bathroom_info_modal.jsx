import React from 'react';
import _     from 'lodash';
import MaterialButton from '../material_components/material_button';
import FormTextArea from '../material_components/formTextArea.jsx';
import {swirlFirebase} from '../../database/firebase_controller';
import FirebaseController from '../../database/firebase_controller';
import StarRater from '../bathroomEdit/starRater.jsx';
import $ from 'jquery';

export default class BathroomInfoModal extends React.Component {
  constructor(){
    super();
    this.state = {
      comments: {},
      thumb: false,
      error: '',
    }
  }

  componentWillMount(){
    swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/reviews`).once('value', (snapshot)=>{
      this.setState({comments: snapshot.val()});
    });
  }

  saveComment(){
    const text = this.textarea.getValue();
    if(!text || !text.length){
      this.setState({error: 'You cannot save an empty comment.'});
      return;
    }
    const comment = {
      text,
      userId: window.localStorage.getItem('swirlUserId'),
      bathroomId: this.props.bathroom.ID,
    userName:FirebaseController.getCurrentUser().displayName
    }
    const reviewKey = swirlFirebase.DATABASE.ref().child(`bathroom/${this.props.bathroom.ID}/reviews`).push().key;
    swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/reviews/${reviewKey}`).set(comment);
    swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/reviews/${reviewKey}`).set(comment);
	//TODO IS THIS RIGHT?
    var userName = FirebaseController.getCurrentUser().displayName;
    this.props.closeModal();
  }

  saveThumbUp(){
    const bathroomCreatorID = swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/creatorID`).once('value');
    swirlFirebase.DATABASE.ref(`thumbs/${this.props.bathroom.ID}/${window.localStorage.getItem('swirlUserId')}`).once('value').then((snapshot)=>{
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

  displayDay(openTime, closeTime, dayName){
	if(openTime == "-1"){
		return;
	}
	$("#businessHoursAppend").append("<div>"+dayName+": "+openTime+"-"+closeTime+"</div>")
  }

  getBusinessHours(){
	  console.log(this.props.bathroom);
	  if(this.props.bathroom.businessHours.na){
		  return " N/A";
	  }else{
		  var businessHours;
		  businessHours = "" +
		  this.displayDay(this.props.bathroom.businessHours.mon.openTime,this.props.bathroom.businessHours.mon.closeTime,"Mon");
		  this.displayDay(this.props.bathroom.businessHours.tue.openTime,this.props.bathroom.businessHours.tue.closeTime,"Tue");
		  this.displayDay(this.props.bathroom.businessHours.wed.openTime,this.props.bathroom.businessHours.wed.closeTime,"Wed");
		  this.displayDay(this.props.bathroom.businessHours.thur.openTime,this.props.bathroom.businessHours.thur.closeTime,"Thur");
		  this.displayDay(this.props.bathroom.businessHours.fri.openTime,this.props.bathroom.businessHours.fri.closeTime,"Fri");
		  this.displayDay(this.props.bathroom.businessHours.sat.openTime,this.props.bathroom.businessHours.sat.closeTime,"Sat");
		  this.displayDay(this.props.bathroom.businessHours.sun.openTime,this.props.bathroom.businessHours.sun.closeTime,"Sun");
	  }
  }

  getAvailableTypes(){
	  this.getAvailableType(this.props.bathroom.malePublic,"Male Public");
	  this.getAvailableType(this.props.bathroom.malePrivate,"Male Private");
	  this.getAvailableType(this.props.bathroom.femalePrivate,"Female Public");
	  this.getAvailableType(this.props.bathroom.femalePublic,"Female Private");
	  this.getAvailableType(this.props.bathroom.neutralPublic,"Neutral Public");
	  this.getAvailableType(this.props.bathroom.neutralPublic,"Neutral Private");
  }

  getAvailableType(type,typeName){
	  if(type==-1){
		  return;
	  }else{
		  $("#availableTypes").append("<div>"+typeName+"</div>");
	  }
  }


  render(){

    return (
      <div className="paper-4 bathroomInfoModal">
        <h2>
          {this.props.bathroom.bathroomName}
        </h2>
		<StarRater allowEdit="false" starAmount={this.props.bathroom.stars}/>
		<div>businessHours:{this.getBusinessHours() }
			<div id="businessHoursAppend" style={{paddingLeft: "20px"}}></div>
		</div>
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
		<div>
			Available Types:
			<div  style={{paddingLeft: "20px"}} id="availableTypes"></div>
		</div>
		<div>
			Additional Info:
			{this.getAvailableTypes()}
			<div style={{paddingLeft: "20px"}}>{this.props.bathroom.additionalInfo}</div>
		</div>
        <div className="formElement">
            <div className="elementBottom">
                <div>Thumbs Up: {this.props.bathroom.numThumbsUp}</div>
                <div>Thumbs Down: {this.props.bathroom.numThumbsDown}</div>
                <MaterialButton onClick={() => {this.saveThumbUp()}}><i className="material-icons">thumb_up</i></MaterialButton>
                <MaterialButton onClick={() => {this.saveThumbDown()}} className="redButton"><i className="material-icons">thumb_down</i></MaterialButton>
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
        <div>{this.state.error}</div>
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
