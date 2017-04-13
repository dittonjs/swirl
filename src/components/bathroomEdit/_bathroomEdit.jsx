/* global google */
import React from 'react';
import _ from 'lodash';
import ApplicationRoute from '../application_route';
import ContentArea from '../content_area';
import FormElement from '../material_components/formElement.jsx';
import FormYesNo from '../material_components/formYesNo.jsx';
import RaisedButton from '../material_components/material_button.jsx';
import BusHours from './busHours';
import FirebaseController, { swirlFirebase } from '../../database/firebase_controller';
import GeoFire from 'geofire';
import {hashHistory} from 'react-router';

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

    submitBathroom(){
      const bathroomName = this.bathroomName.getValue();
      const handicap = this.handicap.getValue();
      const runningWater = this.runningWater.getValue();
      const babyStation = this.babyStation.getValue();
      const isClean = this.clean.getValue();
      const userId = FirebaseController.getCurrentUser().uid || window.localStorage.getItem('swirlUserId');
	  const businessHours = this.businessHours.getBusinessHours();
      const {latLng} = this.state;
      let id = `${latLng.lat()}${latLng.lng()}`
      id = id.replace(/\./g, '-');
      const bathroom = {
        bathroomName,
        handicap,
        runningWater,
        babyStation,
        isClean,
		businessHours,
      }
      swirlFirebase.DATABASE.ref(`users/${userId}/leaderBoardPoints`).once('value',(snapshot) => {
        swirlFirebase.DATABASE.ref(`users/${userId}/leaderBoardPoints`).set(snapshot.val()+100);
      });
      swirlFirebase.DATABASE.ref(`users/${userId}/bathrooms/${id}`).set(bathroom);
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
    			<div>
    				<div>Select the location of the bathroom.</div>
		            <div style={{margin: 'auto', width: '80%', height: '70vh'}} ref={(el)=>{ this.mapDiv = el; }}></div>
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
    					<input type="checkbox" name="gender['mp']" />
                        Male Public<br/>
    					<input type="checkbox" name="gender['fp']" />
                        Female Public<br/>
    					<input type="checkbox" name="gender['np']" />
                        Gender Neutral Public<br/>
    					<input type="checkbox" name="gender['mpr']" />
                        Male Single<br/>
    					<input type="checkbox" name="gender['fpr']" />
                        Female Single<br/>
    					<input type="checkbox" name="gender['npr']" />
                        Gender Neutral Single<br/>
    				</div>
    			</div>
                <div className="formElement">
    				<div className="elementTop">
    					<label htmlFor="gender">Special Directions to find bathroom/ additional comments</label>
    				</div>
    				<div className="elementBottom">
                        <textarea rows="5" cols="40"></textarea>
    				</div>
    			</div>
                <RaisedButton onClick={() => this.submitBathroom()}>Save</RaisedButton>
    		</ContentArea>
        );
    }
}
