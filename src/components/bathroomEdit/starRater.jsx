import React from 'react';
import $ from 'jquery';



export default class starRater extends React.Component {
	getStarAmount(){
		return{
			starAmount:this.refs.starAmount.value
		}
	}
	componentDidMount(){
		var mouseDown = false;
		if(this.props.allowEdit == "true"){
			var allowEdit = true;
		}else{
			var allowEdit = false;
		}
		var startStars = this.props.starAmount;
		for(var i = 0; i <=5; i++){
			if(i <= startStars){
				$("#star-"+ i).removeClass("grayStar");
				$("#star-"+ i).addClass("yellowStar");
			}else{
				$("#star-"+ i).addClass("grayStar");
				$("#star-"+ i).removeClass("yellowStar");
			}
		}

		$(document).mousedown(function(){
			mouseDown = true;
		});
		$(document).mouseup(function(){
			mouseDown = false;
			$(document).css('cursor','pointer');
		});
		$(".star").on("mouseover",function(){
			$(document).css('cursor','pointer');
			// $('html,body').css('cursor','crosshair');
			if(mouseDown && allowEdit){
				var starNum = $(this).attr("data-num");
				$("#starAmount").val(starNum);
				for(var i = 0; i <=5; i++){
					if(i <= starNum){
						$("#star-"+ i).removeClass("grayStar");
						$("#star-"+ i).addClass("yellowStar");
					}else{
						$("#star-"+ i).addClass("grayStar");
						$("#star-"+ i).removeClass("yellowStar");
					}
				}
			}
		});
		$(".star").on("mousedown",function(){
			if(allowEdit){
				$(document).css('cursor','pointer');
				// $('html,body').css('cursor','crosshair');
				var starNum = $(this).attr("data-num");
				$("#starAmount").val(starNum);
				for(var i = 0; i <=5; i++){
					if(i <= starNum){
						$("#star-"+ i).removeClass("grayStar");
						$("#star-"+ i).addClass("yellowStar");
					}else{
						$("#star-"+ i).addClass("grayStar");
						$("#star-"+ i).removeClass("yellowStar");
					}
				}
			}
		});
	}
	render(){
		var style = {
			first : {
				marginTop: '15px',
				marginLeft: '10px'
			},
			last : {
				marginBottom: '15px'
			}
		};
		return (
		<div style={style.last} >
			<label >Quality of Bathroom</label>
			<br/>
			<div style={style.first} id="star-1" data-num="1" className="grayStar star"></div>
			<div id="star-2" data-num="2" className="grayStar star"></div>
			<div id="star-3" data-num="3" className="grayStar star"></div>
			<div id="star-4" data-num="4" className="grayStar star"></div>
			<div id="star-5" data-num="5" className="grayStar star"></div>
			<input ref="starAmount" type="hidden" value="0" id="starAmount" name="startAmount"/>
		</div >
		)
	}
}
