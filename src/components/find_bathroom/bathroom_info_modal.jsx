import React from 'react';

export default class BathroomInfoModal extends React.Component {
  render(){
    if(!this.props.open) return null;
    return (
      <div>IM open!</div>
    );
  }
}
