import React  from 'react';

export default class FormYesNo extends React.Component {
  constructor(){
    super();
    this.yesRadio = null;
  }
  getValue(){
    return !!this.yesRadio.checked;
  }
	render(){
		return(
			<div className="formElement formYesNo">
				<div className="elementTop">
					<label htmlFor={this.props.elementID}>{this.props.labelName}</label>
				</div>
				<div className="elementBottom">
					<input type="radio" ref={(el)=>{this.yesRadio = el}} name={this.props.elementID} id={this.props.ans1+this.props.elementID} />
					{this.props.ans1}
					<input type="radio" name={this.props.elementID} id={this.props.ans2+this.props.elementID} />
					{this.props.asn2}
					No
				</div>
			</div>
		)
	};
}
