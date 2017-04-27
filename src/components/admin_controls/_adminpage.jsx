import React from 'react';
import ContentArea from '../content_area';

export default class AdminControls extends React.Component{
  render(){
    return(
      <ContentArea pageName="Admin Controls">
        <div>
          <div className="paper-3">
            <h3>Users</h3>
          </div>
          <div className="paper-3">
            <h3>Bathrooms</h3>
          </div>
        </div>
      </ContentArea>
    );
  }
}
