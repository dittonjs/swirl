import React  from 'react';

export default class FormTextArea extends React.Component {
	//Incoming vars: labelName, elementID, inputType
	render(){
		return(
			<div className="formElement">
				<div className="elementTop">
					<label htmlFor={this.props.elementID}>{this.props.labelName}</label>
				</div>
				<div className="elementBottom">
					<textarea id={this.props.elementID} rows="5" cols="40"></textarea>
				</div>
			</div>
		)
	};
}
