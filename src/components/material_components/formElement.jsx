import React  from 'react';


export default class FormElement extends React.Component {
	//Incoming vars: labelName, elementID, inputType
	render(){
		return(
			<div className="formElement">
				<div className="elementTop">
					<label htmlFor={this.props.elementID}>{this.props.labelName}</label>
				</div>
				<div className="elementBottom">
					<input type= {this.props.inputType} name={this.props.elementID} id={this.props.elementID} />
				</div>
			</div>
		)
	};
}
