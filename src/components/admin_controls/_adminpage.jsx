import React from 'react';
import ContentArea from '../content_area';

export default class AdminControls extends React.Component{
  render(){
    return(
      <ContentArea pageName="Admin Controls">
        <div className="landing-zone">
          <div className="paper-3">
            <h3>Users</h3>
          </div>
          <div className="paper-3">
            <h3>Bathrooms</h3>
          </div>
          <div className="landing-shadow">
            <img alt="toilets" src="https://s-media-cache-ak0.pinimg.com/originals/5e/04/f3/5e04f373c6d02fdbdb775faf3dbfa405.jpg" />
          </div>
        </div>
      </ContentArea>
    );
  }
}
