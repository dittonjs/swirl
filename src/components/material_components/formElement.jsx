import React  from 'react';

export default class FormElement extends React.Component {
	//Incoming vars: labelName, elementID, inputType
  constructor(){
    super();
    this.input = null;
  }

  getValue(){
    return this.input.value;
  }

	render(){
		return(
			<div className="formElement">
				<div className="elementTop">
					<label htmlFor={this.props.elementID}>{this.props.labelName}</label>
				</div>
				<div className="elementBottom">
					<input ref={(el)=>{ this.input = el; }}type={this.props.inputType} name={this.props.elementID} id={this.props.elementID} placeholder={this.props.placeholder}/>
				</div>
			</div>
		)
	};
}
