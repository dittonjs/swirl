import React from 'react';

export default class Login extends React.Component {
  constructor(props){
    super();
    this.state = {
      userClickedPopup: false,
    };
  }
  componentDidMount(){}
  componentWillUpdate(nextProps, nextState){}
  componentDidUpdate(){}
  componentWillReceiveProps(nextProps){}
  shouldComponentUpdate(nextProps, nextState){}
  componentWillUnmount(){}
  render(){
    return (
      <div>
        Login
      </div>
    );
  }
}
