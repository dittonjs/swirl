import React from 'react';
import _ from "lodash";
import ContentArea from '../content_area';
import {swirlFirebase} from '../../database/firebase_controller';

export default class adminUserList extends React.Component{
  constructor(){
    super();
    this.state = {
      users:{}
    }
  }
  componentWillMount(){
    swirlFirebase.DATABASE.ref("users").once("value", (snapshot)=>{
      this.setState({
        users:_.sortBy(_.toArray(snapshot.val()),["userName"])
      });
    })
  }
  getUsers(){
    return _.map(this.state.users, (user)=>{
      return 4;
    })
  }
  render(){
    return(
      <ContentArea pageName="Admin User Control">
      </ContentArea>
    );
  }
}
