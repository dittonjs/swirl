import React from 'react';
// import $ from 'jquery';



export default class starRater extends React.Component {
	// componentDidMount(){
	// 	var mouseDown = false;
	// 	$(document).mousedown(function(){
	// 		mouseDown = true;
	// 	});
	// 	$(document).mouseup(function(){
	// 		mouseDown = false;
	// 	});
	// 	$(".star").on("mouseover",function(){
	// 		// $('html,body').css('cursor','crosshair');
	// 		if(mouseDown){
	// 			var starNum = $(this).attr("data-num");
	// 			$("#startAmount").val(starNum);
	// 			for(var i = 0; i <=5; i++){
	// 				if(i <= starNum){
	// 					$("#star-"+ i).removeClass("grayStar");
	// 					$("#star-"+ i).addClass("yellowStar");
	// 				}else{
	// 					$("#star-"+ i).addClass("grayStar");
	// 					$("#star-"+ i).removeClass("yellowStar");
	// 				}
	// 			}
	// 		}
	// 	});
	// 	$(".star").on("mousedown",function(){
	// 		// $('html,body').css('cursor','crosshair');
	// 		var starNum = $(this).attr("data-num");
	// 		$("#startAmount").val(starNum);
	// 		for(var i = 0; i <=5; i++){
	// 			if(i <= starNum){
	// 				$("#star-"+ i).removeClass("grayStar");
	// 				$("#star-"+ i).addClass("yellowStar");
	// 			}else{
	// 				$("#star-"+ i).addClass("grayStar");
	// 				$("#star-"+ i).removeClass("yellowStar");
	// 			}
	// 		}
	// 	});
	// }
	render(){
		return (
		<div>
			<div id="star-1" data-num="1" className="grayStar star"></div>
			<div id="star-2" data-num="2" className="grayStar star"></div>
			<div id="star-3" data-num="3" className="grayStar star"></div>
			<div id="star-4" data-num="4" className="grayStar star"></div>
			<div id="star-5" data-num="5" className="grayStar star"></div>
			<input type="hidden" value="0" id="startAmmount" name="startAmount"/>
		</div>
		)
	}
}
