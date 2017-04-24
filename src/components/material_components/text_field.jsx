import React from 'react';

export default class TextField extends React.Component {
  getValue(){
    return this.refs.field.value;
  }
  render(){
    return (
      <div className="text-field">
        <input
          ref="field"
          type={this.props.type || 'text'}
          required
        />
        <span />
        <label>{this.props.placeholder}</label>
      </div>
    );
  }
}
