import React              from 'react';
import FirebaseController from './database/firebase_controller';
import { hashHistory }    from 'react-router';
import './styles/application.scss';

class App extends React.Component {
  componentWillMount(){
    // for auth with facebook
    FirebaseController.getRedirectResult((result)=>{
      if(result.credential){
        hashHistory.push("/profile");
      }
    }, (err)=>{
      debugger
    });
  }
  render() {
    return (
      <div>
        <button onClick={()=>FirebaseController.signOut()}>SIGNOUT</button>
        {this.props.children}
      </div>
    );
  }
}

export default App;
