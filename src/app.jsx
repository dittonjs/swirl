import React              from 'react';
import FirebaseController from './database/firebase_controller';
import {swirlFirebase} from './database/firebase_controller';
import { hashHistory }    from 'react-router';
import './styles/application.scss';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      pendingRedirect: "0",
    }
  }
  updateUserID(user){
    window.localStorage.setItem('swirlUserId', user.uid);
    swirlFirebase.DATABASE.ref('users/' + user.uid).once('value').then((snapshot)=>{
      !snapshot.val() && swirlFirebase.DATABASE.ref('users/' + user.uid).set({
        UID: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        leaderBoardPoints: 0
      });
    });
  }
  componentWillMount(){
    this.setState({pendingRedirect: window.localStorage.getItem("pendingRedirect")});
    // for auth with facebook
    FirebaseController.getRedirectResult((result)=>{
      window.localStorage.setItem("pendingRedirect", "0");
      this.setState({pendingRedirect: "0"});
      if(result.credential){
        this.updateUserID(result.user);
        hashHistory.push("/profile");
      }
    }, (err)=>{
      this.setState({pendingRedirect: "0"});
      window.localStorage.setItem("pendingRedirect", "0");
    });
  }

  render() {
    if(this.state.pendingRedirect === "1"){
      return <h1>Loading</h1>;
    }
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
