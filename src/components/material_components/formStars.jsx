import React  from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class FormStars extends React.Component {
	//Incoming vars: labelName, elementID, inputType
	render(){
		return(
			<div className="formElement">
				<div className="elementTop">
					<label htmlFor={this.props.elementID}>{this.props.labelName}</label>
				</div>
				<div className="elementBottom">
					<StarRatingComponent
					    name={this.props.elementID}
					    value={3}
					    starCount={5}
					    onStarClick={()=>{}}
					    renderStarIcon={()=>{}}
					    renderStarIconHalf={()=>{}}
					    starColor={"#4CAF50"}
					    emptyStarColor={"#4CAF50"}
					/>
				</div>
			</div>
		)
	};
}
