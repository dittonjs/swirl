import React from 'react';
import _ from 'lodash';
import ApplicationRoute from '../application_route';
import PageHeader from '../pageHeader';
import ContentArea from '../content_area';
import FormElement from '../material_components/formElement';
import FormStar from '../material_components/formStars';
import BusHours from './busHours';

export default class BathroomEdit extends ApplicationRoute {
    render() {
        return(
		<ContentArea>
			<FormElement labelName="Bathroom Location (Engineering Building 1st Floor)" elementID="bathroomName" inputType="text"/>
			<FormStar labelName="Bathroom Rating" elementID="bathroomRating"  />
			<div>
				<div>Select the location of the bathroom.</div>
			</div>
			<BusHours />
		</ContentArea>
        );
    }
}
