import React from 'react';
import { connect } from 'react-redux';

const selector = (state)=>({
  settings: state.settings,
});

export class Landing extends React.Component {

  render(){
    console.log(this.props);
    return (
      <div>
        LANDING!!!!
      </div>
    );
  }
}

export default connect(selector)(Landing);
