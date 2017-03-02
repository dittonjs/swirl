import React from 'react';
import { connect } from 'react-redux';
import PageHeader from './pageHeader';


const selector = (state)=>({
  settings: state.settings,
});

export class Landing extends React.Component {

  render(){
    console.log(this.props);
    return (
      <div>
        <PageHeader pageName="Landing"/>
        LANDING!!!!
      </div>
    );
  }
}

export default connect(selector)(Landing);
