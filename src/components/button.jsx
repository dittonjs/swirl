import React from "react";

export default class Button extends React.Component {

  render(){
    return (
      <button className={"btn " + this.props.className} {...this.props}>{this.props.children}</button>
    );
  }
}
