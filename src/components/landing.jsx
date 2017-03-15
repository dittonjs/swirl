import React from 'react';
import { connect } from 'react-redux';
import PageHeader from './pageHeader';
import ContentArea from './content_area';
import MaterialButton from './material_components/material_button';
import { hashHistory } from 'react-router';
const selector = (state)=>({
  settings: state.settings,
});

export class Landing extends React.Component {

  render(){
    return (
      <ContentArea pageName="Swirl">
        <div className="landing-zone">
          <div className="landing-message">
            <h1>SWIRL</h1>
            <h2>Never use a disgusting bathroom ever again</h2>
            <div className="landing-actions">
              <MaterialButton
                type="flat"
                className="landing-action-button"
                onClick={() => hashHistory.push('/find_bathroom')}
              >
                FIND BATHROOM
              </MaterialButton>
              <MaterialButton
                type="flat"
                className="landing-action-button"
                onClick={() => hashHistory.push('/login')}
              >
                SIGN IN
              </MaterialButton>
              <MaterialButton
                type="flat"
                className="landing-action-button"
                onClick={() => hashHistory.push('/register')}
              >
                REGISTER
              </MaterialButton>
            </div>
          </div>
          <div className="landing-shadow">
            <img alt="toilets" src="https://s-media-cache-ak0.pinimg.com/originals/5e/04/f3/5e04f373c6d02fdbdb775faf3dbfa405.jpg" />
          </div>
        </div>
      </ContentArea>
    );
  }
}

export default connect(selector)(Landing);
