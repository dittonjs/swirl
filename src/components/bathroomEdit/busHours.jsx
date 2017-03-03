import React from 'react';
import DateSelect from './dateSelect';
import ApplicationRoute from '../application_route';

export default class BusHours extends ApplicationRoute {
    render() {
        return(
			<div>
				<div>
					Select hours that the bathroom is available. Select N/A if the bathroom is always accessable.
				</div>
				<input type="checkbox" name="notApplicable" id="notApplicable" />
				<label htmlFor="notApplicable">N/A</label>
				<DateSelect dayID="day_mon" dayName="Monday"/>
				<DateSelect dayID="day_tue" dayName="Tuesday"/>
				<DateSelect dayID="day_wed" dayName="Wednesday"/>
				<DateSelect dayID="day_thur" dayName="Thursday"/>
				<DateSelect dayID="day_fri" dayName="Friday"/>
				<DateSelect dayID="day_sat" dayName="Saturday"/>
				<DateSelect dayID="day_sun" dayName="Sunday"/>
			</div>
		)
}
}
