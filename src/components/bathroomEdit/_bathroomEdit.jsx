/* global google */
import React from 'react';
import _ from 'lodash';
import ApplicationRoute from '../application_route';
import ContentArea from '../content_area';
import FormElement from '../material_components/formElement.jsx';
import FormYesNo from '../material_components/formYesNo.jsx';
import StarRater from './starRater.jsx';
import RaisedButton from '../material_components/material_button.jsx';
import BusHours from './busHours';
import FirebaseController, { swirlFirebase } from '../../database/firebase_controller';
import GeoFire from 'geofire';
import {hashHistory} from 'react-router';
import $ from 'jquery';

export default class BathroomEdit extends ApplicationRoute {
    constructor(){
      super();
      this.mapDiv = null;
      this.map = null;
      this.bathroomName = null;
      this.clean = null;
      this.handicap = null;
      this.runningWater = null;
      this.babyStation = null;
      this.businessHours = null;
      this.state = {
        latLng: null,
      }
    }

    componentWillMount(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.map = new google.maps.Map(this.mapDiv, {zoom: 20, center: currentLocation});
          new google.maps.Marker({
            position: currentLocation,
            map: this.map
          });
          this.map.addListener('click', (e) => {
            this.setState({latLng: e.latLng});
            new google.maps.Marker({
              position: e.latLng,
              map: this.map
            });
          });
        });
      }
    }

	getIsChecked(elementID){
		if($("#"+elementID+":checked").length > 0 ){
			return 1;
		}else{
			return -1;
		}
	}

    submitBathroom(){
      const bathroomName = this.bathroomName.getValue();
	  const stars = this.stars.getStarAmount().starAmount;
	  const handicap = this.handicap.getValue();
      const runningWater = this.runningWater.getValue();
      const babyStation = this.babyStation.getValue();
      const isClean = this.clean.getValue();
      const creatorID = FirebaseController.getCurrentUser().uid || window.localStorage.getItem('swirlUserId');
	  const additionalInfo = $("#additionalInfo").val();
	  const businessHours = this.businessHours.getBusinessHours();
	  const malePublic = this.getIsChecked("gender_mp");
	  const femalePublic = this.getIsChecked("gender_fp");
	  const neutralPublic = this.getIsChecked("gender_np");
	  const malePrivate = this.getIsChecked("gender_mpr");
	  const femalePrivate = this.getIsChecked("gender_fpr");
	  const neutralPrivate = this.getIsChecked("gender_npr");
	  const {latLng} = this.state;
	  //Start Validation:
	  if(stars == 0){
		  alert("Please add a star amount to the bathroom");
		  return;
	  }
	  if(!latLng){
		  alert("Please select the bathroom location on the map");
		  return;
	  }
	  if(!bathroomName){
		  alert("Please give this bathroom a name.");
		  return;
	  }
      let id = `${latLng.lat()}${latLng.lng()}`
      id = id.replace(/\./g, '-');
      const bathroom = {
        bathroomName,
		stars,
        handicap,
        runningWater,
        babyStation,
        isClean,
		additionalInfo,
	    businessHours,
        creatorID,
		malePublic,
		malePrivate,
		femalePrivate,
		femalePublic,
		neutralPublic,
		neutralPrivate,
        numThumbsUp: 0,
        numThumbsDown: 0,
      }

      const userBathroom = {
        bathroomName,
		stars,
        handicap,
        runningWater,
        babyStation,
        isClean,
		additionalInfo,
	    businessHours,
		malePublic,
		malePrivate,
		femalePrivate,
		femalePublic,
		neutralPublic,
		neutralPrivate,
        numThumbsUp: 0,
        numThumbsDown: 0,
        thisUserThumbed: false,
      }
      swirlFirebase.DATABASE.ref(`users/${creatorID}/leaderBoardPoints`).once('value',(snapshot) => {
        swirlFirebase.DATABASE.ref(`users/${creatorID}/leaderBoardPoints`).set(snapshot.val()+100);
      });
      swirlFirebase.DATABASE.ref(`users/${creatorID}/bathrooms/${id}`).set(userBathroom);
      swirlFirebase.DATABASE.ref(`bathrooms/${id}`).set(bathroom);
      const geoFire = new GeoFire(swirlFirebase.DATABASE.ref('geolocation'));
      geoFire.set(id, [latLng.lat(), latLng.lng()]).then(()=>{}, (err)=>{
        console.log(err);
      });
	  hashHistory.push('/findBathroom');
    }

    render() {
        return (
    		<ContentArea>
    			<FormElement ref={(el)=>{ this.bathroomName = el; }} labelName="Bathroom Location" elementID="bathroomName" inputType="text" placeholder="Office First Floor"/>
				<StarRater allowEdit="true" starAmount="0" ref={(el)=>{ this.stars = el; }}/>
    			<div>
    				<label style={{marginBottom: "10px"}} >Location of the bathroom.</label>
		            <div style={{margin: '10px 0px 10px 15px', width: '80%', height: '70vh'}} ref={(el)=>{ this.mapDiv = el; }}></div>
    			</div>
    			<BusHours ref={(el)=>{ this.businessHours = el; }}/>
    			<FormYesNo ref={(el)=>{ this.clean = el; }}labelName="Would you consider this bathroom to be clean?" elementID="clean" ans1="Yes" ans2="No"/>
                <FormYesNo ref={(el)=>{ this.runningWater = el; }} labelName="Is there running water?" elementID="water" ans1="Yes" ans2="No"/>
                <FormYesNo ref={(el)=>{ this.handicap = el; }} labelName="Are there handicap accomidations?" elementID="handicap" ans1="Yes" ans2="No"/>
                <FormYesNo ref={(el)=>{ this.babyStation = el; }} labelName="Baby changing station?" elementID="babyStation" ans1="Yes" ans2="No"/>
                <div className="formElement">
    				<div className="elementTop">
    					<label htmlFor="gender">What kind of bathrooms are available?</label>
    				</div>
    				<div className="elementBottom">
    					<input type="checkbox" id="gender_mp" />
                        Male Public<br/>
						<input type="checkbox" id="gender_fp" />
                        Female Public<br/>
						<input type="checkbox" id="gender_np" />
                        Gender Neutral Public<br/>
						<input type="checkbox" id="gender_mpr" />
                        Male Single<br/>
						<input type="checkbox" id="gender_fpr" />
                        Female Single<br/>
						<input type="checkbox" id="gender_npr" />
                        Gender Neutral Single<br/>
    				</div>
    			</div>
                <div className="formElement">
    				<div className="elementTop">
    					<label htmlFor="gender">Special Directions to find bathroom/ additional comments</label>
    				</div>
    				<div className="elementBottom">
                        <textarea id="additionalInfo" rows="5" cols="40"></textarea>
    				</div>
    			</div>
                <RaisedButton onClick={() => this.submitBathroom()}>Save</RaisedButton>
    		</ContentArea>
        );
    }
}
