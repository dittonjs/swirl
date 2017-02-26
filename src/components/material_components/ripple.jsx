import React from 'react';

export default class Ripple extends React.Component {

  componentDidMount(){
    this.timeout = setTimeout(() => this.props.removeMe(this), this.props.duration);
  }

  componentWillUnmount(){
    clearTimeout(this.timeout);
  }

  render(){
    const style = {
      top: `calc(${this.props.yPos}px - 25px)`,
      left: `calc(${this.props.xPos}px - 25px)`,
    }
    return (
      <div className="ripple" style={style}/>
    );
  }

}
