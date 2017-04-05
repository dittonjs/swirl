import React from 'react';
import MaterialButton from '../material_components/material_button';
import FormTextArea from '../material_components/formTextArea.jsx';
import {swirlFirebase} from '../../database/firebase_controller';

export default class BathroomInfoModal extends React.Component {

  saveComment(){
    const commentText = this.textarea.value;
    const reviewKey = swirlFirebase.DATABASE.ref().child(`bathroom/${this.props.bathroom.ID}/reviews`).push().key;
    swirlFirebase.DATABASE.ref(`bathrooms/${this.props.bathroom.ID}/reviews/${reviewKey}`).set({commentText});
    swirlFirebase.DATABASE.ref(`users/${window.localStorage.getItem('swirlUserId')}/reviews/${reviewKey}`).set({commentText});
    this.props.closeModal();
  }

  render(){
    if(!this.props.open) return null;
    return (
      <div className="paper-4 bathroomInfoModal">
        <h2>
          {this.props.bathroom.bathroomName}
        </h2>
        <div>
          Running Water: {this.props.bathroom.runningWater ? "Yes" : "No"}
        </div>
        <div>
          Is Clean: {this.props.bathroom.isClean ? "Yes" : "No"}
        </div>
        <div>
          Baby Station: {this.props.bathroom.babyStation ? "Yes" : "No"}
        </div>
        <div>
          Handicap: {this.props.bathroom.handicap ? "Yes" : "No"}
        </div>
        <div className="formElement">
            <div className="elementBottom">
                <MaterialButton><i className="material-icons">thumb_up</i></MaterialButton>
                <MaterialButton><i className="material-icons">thumb_down</i></MaterialButton>
                <FormTextArea ref={el=>{this.textarea=el}} elementID="reviewText" labelName="Comments"/>
            </div>
        </div>
        <MaterialButton className="closeButton" type="flat"
          onClick={this.props.closeModal}>
          CLOSE
        </MaterialButton>
        <MaterialButton className="saveButton" type="flat"
          onClick={() => {this.saveComment()}}>
          SAVE
        </MaterialButton>
      </div>
    );
  }
}
