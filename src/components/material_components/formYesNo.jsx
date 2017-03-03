import React  from 'react';

export default class FormYesNo extends React.Component {
	render(){
		return(
			<div className="formElement">
				<div className="elementTop">
					<label htmlFor={this.props.elementID}>{this.props.labelName}</label>
				</div>
				<div className="elementBottom">
					<input type="radio" name={this.props.elementID} id={this.props.ans1+this.props.elementID} />
					{this.props.ans1}
					<input type="radio" name={this.props.elementID} id={this.props.ans2+this.props.elementID} />
					{this.props.asn2}
					No
				</div>
			</div>
		)
	};
}
