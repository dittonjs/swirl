import React from 'react';
import ContentArea from '../content_area';
import BathroomInfoModal from './bathroom_info_modal';
import {swirlFirebase} from '../../database/firebase_controller';
import GeoFire from 'geofire';
import _ from 'lodash';
/* global google */
export default class FindBathroom extends React.Component {
  constructor(){
    super();
    this.state = {
      currentLocation: null,
    }
    this.mapDiv = null;
    this.map = null;
  }
  componentWillMount(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.setState({ currentLocation });
        this.map = new google.maps.Map(this.mapDiv, {zoom: 20, center: currentLocation});
        new google.maps.Marker({
          position: currentLocation,
          map: this.map
        });
        const geoFire = new GeoFire(swirlFirebase.DATABASE.ref('geolocation'));
        const geoQuery = geoFire.query({
          center: [currentLocation.lat, currentLocation.lng],
          radius: 1
        });
        geoQuery.on('key_entered', (key, location)=>{
          swirlFirebase.DATABASE.ref(`bathrooms/${key}`).once('value').then((snapshot)=>{
            new google.maps.Marker({
              position: {lat: location[0], lng: location[1]},
              map: this.map,
              icon: 'http://pix.iemoji.com/sams33/0566.png'
            }).addListener('click', ()=>{
              // do something with the bathroom data
              this.setState({
                open: true,
                selectedBathroom: {...snapshot.val(), ID: key},
              })
            });
          });
        });
      }, (err) => {
        debugger
      });
    }
  }

  closeModal(){
    this.setState({open: false});
  }

  render(){
    let loading = null;
    if(!this.state.currentLocation){
      loading = "LOADING..."
    }
    return (
      <ContentArea>
        {loading}
        <div >
          <div style={{margin: 'auto', width: '80%', height: '70vh'}} ref={(el) => { this.mapDiv = el; }} />
        </div>
        { !this.state.open ? null : <BathroomInfoModal closeModal={() => this.closeModal()} open={this.state.open} bathroom={this.state.selectedBathroom}/>}
      </ContentArea>
    );
  }
}
