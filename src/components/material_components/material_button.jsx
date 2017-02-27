import React  from 'react';
import _      from 'lodash';
import Ripple from './ripple';
export default class RaisedButton extends React.Component {

  constructor(){
    super();
    this.count = 0;
    this.button = null;
    this.state = {
      ripples: []
    }
  }

  handleClick(e){
    const {offsetTop, offsetLeft} = this.button;
    const relativeLocationX = e.pageX - offsetLeft;
    const relativeLocationY = e.pageY - offsetTop;
    // debugger;
    const count = this.count;
    const newRipples = [
      ...this.state.ripples,
      <Ripple
        rippleId={count}
        key={`ripple_${count}`}
        xPos={relativeLocationX}
        yPos={relativeLocationY}
        duration={2000}
        removeMe={(ripple)=>{
          _.remove(this.state.ripples, r => r.props.rippleId === count);
          // this is kindof a hack because _.remove is destructive all this does is tell
          // this component that the state changed
          this.setState({ripples: this.state.ripples});
        }}
      />
    ];
    this.count++;
    this.setState({ripples: newRipples});
    this.props.onClick && this.props.onClick(e);
  }

  render(){
    return (
      <button
        className={
          `${this.props.type ==='flat' ? "flat-button" : "raised-button"} ${this.props.className || ""}`
        }
        onClick={e => this.handleClick(e)}
        ref={(el) => { this.button = el; }}
      >
        {this.props.children}
        {this.state.ripples}
      </button>
    );
  }
}
