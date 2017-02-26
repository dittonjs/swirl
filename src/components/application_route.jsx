import React              from 'react';
import FirebaseController from '../database/firebase_controller';
import { hashHistory }    from 'react-router';
export default class ApplicationRoute extends React.Component {
  componentWillMount(){
    FirebaseController.verifyLoggedIn((user)=>{
      if(!user){
        hashHistory.push('/login');
      }
    });
  }
}
