import React from 'react';
import _ from 'lodash';
import ApplicationRoute from '../application_route';
import PageHeader from '../pageHeader';
import ContentArea from '../content_area';
import FormElement from '../material_components/formElement.jsx';
import FormYesNo from '../material_components/formYesNo.jsx';
import FormStar from '../material_components/formStars.jsx';
import RaisedButton from '../material_components/material_button.jsx';
import BusHours from './busHours';
const divStyle={
        padding: '200px',
        border: '1px solid black',
    };
export default class BathroomEdit extends ApplicationRoute {

    render() {
        return(
    		<ContentArea>
    			<FormElement labelName="Bathroom Location" elementID="bathroomName" inputType="text" placeholder="Office First Floor"/>
    			<FormStar labelName="Bathroom Rating" elementID="bathroomRating"  />
    			<div>
    				<div>Select the location of the bathroom.</div>
                    <div style={divStyle}>Map Here</div>
    			</div>
    			<BusHours />
    			<FormYesNo labelName="Would you consider this bathroom to be clean?" elementID="clean" ans1="Yes" ans2="No"/>
                <FormYesNo labelName="Is there running water?" elementID="water" ans1="Yes" ans2="No"/>
                <FormYesNo labelName="Are there handicap accomidations?" elementID="water" ans1="Yes" ans2="No"/>
                <FormYesNo labelName="Baby changing station?" elementID="water" ans1="Yes" ans2="No"/>
                <div className="formElement">
    				<div className="elementTop">
    					<label htmlFor="gender">What kind of bathrooms are available?</label>
    				</div>
    				<div className="elementBottom">
    					<input type="checkbox" name="gender['mp']" />
                        Male Public<br/>
    					<input type="checkbox" name="gender['fp']" />
                        Female Public<br/>
    					<input type="checkbox" name="gender['np']" />
                        Gender Neutral Public<br/>
    					<input type="checkbox" name="gender['mpr']" />
                        Male Single<br/>
    					<input type="checkbox" name="gender['fpr']" />
                        Female Single<br/>
    					<input type="checkbox" name="gender['npr']" />
                        Gender Neutral Single<br/>
    				</div>
    			</div>
                <div className="formElement">
    				<div className="elementTop">
    					<label htmlFor="gender">Special Directions to find bathroom/ additional comments</label>
    				</div>
    				<div className="elementBottom">
                        <textarea rows="5" cols="40"></textarea>
    				</div>
    			</div>
                <RaisedButton>Save</RaisedButton>
    		</ContentArea>
        );
    }
}
