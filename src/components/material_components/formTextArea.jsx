import React  from 'react';

export default class FormTextArea extends React.Component {
	//Incoming vars: labelName, elementID, inputType
	getValue(){
		return this.textarea.value
	}

	static defaultProps={rowSize:5,colSize:40}
	render(){
		return(
			<div className="formElement">
				<div className="elementTop">
					<label htmlFor={this.props.elementID}>{this.props.labelName}</label>
				</div>
				<div className="elementBottom">
					<textarea ref={el=>{this.textarea=el}} id={this.props.elementID} rows={this.props.rowSize} cols={this.props.colSize}></textarea>
				</div>
			</div>
		)
	};
}
