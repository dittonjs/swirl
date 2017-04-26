import React from 'react';
import DateSelect from './dateSelect';
import ApplicationRoute from '../application_route';
import $ from 'jquery';

export default class BusHours extends ApplicationRoute {
	getBusinessHours(){
		var na;
		if($("#notApplicable:checked").length > 0){
			na = 1;
		}else{
			na = 0;
		}

		return{
			na:na,
			mon:this.refs.mon.getTimeRange(),
			tue:this.refs.tue.getTimeRange(),
			wed:this.refs.wed.getTimeRange(),
			thur:this.refs.thur.getTimeRange(),
			fri:this.refs.fri.getTimeRange(),
			sat:this.refs.sat.getTimeRange(),
			sun:this.refs.sun.getTimeRange(),
		}
	}
    render() {
        return(
			<div id="busHours">
				<div className="busHoursLbl">
					When is the bathroom available? Select N/A if the bathroom is always accessable.
				</div>
				<input type="checkbox" name="notApplicable" id="notApplicable" />
				<label htmlFor="notApplicable">N/A</label>
				<DateSelect ref="mon" dayID="day_mon" dayName="Monday"/>
				<DateSelect ref="tue" dayID="day_tue" dayName="Tuesday"/>
				<DateSelect ref="wed" dayID="day_wed" dayName="Wednesday"/>
				<DateSelect ref="thur" dayID="day_thur" dayName="Thursday"/>
				<DateSelect ref="fri" dayID="day_fri" dayName="Friday"/>
				<DateSelect ref="sat" dayID="day_sat" dayName="Saturday"/>
				<DateSelect ref="sun" dayID="day_sun" dayName="Sunday"/>
			</div>
		)
}
}
