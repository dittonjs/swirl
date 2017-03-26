import React from 'react';
import ContentArea from '../content_area';
/* global google */
export default class FindBathroom extends React.Component {
  constructor(){
    super();
    this.state = {
      currentLocation: null
    }
    this.mapDiv = null;
  }
  componentWillMount(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.setState({ currentLocation });
        const map = new google.maps.Map(this.mapDiv, {zoom: 20, center: currentLocation});
        new google.maps.Marker({
          position: currentLocation,
          map
        }).addListener('click', () => {console.log("clicked")});

      });
    }
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
      </ContentArea>
    );
  }
}
