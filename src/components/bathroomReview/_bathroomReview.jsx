import React from 'react';
import _ from 'lodash';
import ApplicationRoute from '../application_route';
import ContentArea from '../content_area';
import RaisedButton from '../material_components/material_button.jsx';
import FormTextArea from '../material_components/formTextArea.jsx';
export default class BathroomReview extends React.Component {
    render(){
        return(
            <ContentArea>
                <div className="formElement">
                    <div className="elementBottom">
                        <RaisedButton><i className="material-icons">thumb_up</i></RaisedButton>
                        <RaisedButton><i className="material-icons">thumb_down</i></RaisedButton>
                        <FormTextArea elementID="reviewText" labelName="Comments"/>
                    </div>
                </div>
            </ContentArea>
        );
    }
}
