import React from 'react';
import { connect } from 'react-redux';
import PageHeader from './pageHeader';
import ContentArea from './content_area';

const selector = (state)=>({
  settings: state.settings,
});

export class Landing extends React.Component {

  render(){
    return (
      <ContentArea pageName="Landing">
        <div>LANDING</div>
      </ContentArea>
    );
  }
}

export default connect(selector)(Landing);
