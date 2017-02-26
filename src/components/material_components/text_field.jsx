import React from 'react';

export default class TextField extends React.Component {
  render(){
    return (
      <div className="text-field">
        <input
          type={this.props.type || 'text'}
          required
        />
        <span />
        <label>{this.props.placeholder}</label>
      </div>
    );
  }
}
