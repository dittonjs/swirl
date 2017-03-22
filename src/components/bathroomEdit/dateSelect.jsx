import React from 'react';
import ApplicationRoute from '../application_route';

export default class DateSelect extends ApplicationRoute {
    render() {
        return(
			<tr>
				<td>
					<input type="checkbox" name={this.props.dayID} id={this.props.dayID} />
					<label htmlFor={this.props.dayID}>{this.props.dayName}</label>
				</td>
					<td>
						<select name={this.props.elementID} id={this.props.elementID}>
							<option value="0">12:00 AM</option>
							<option value="1">1:00 AM</option>
							<option value="2">2:00 AM</option>
							<option value="3">3:00 AM</option>
							<option value="4">4:00 AM</option>
							<option value="5">5:00 AM</option>
							<option value="6">6:00 AM</option>
							<option value="7">7:00 AM</option>
							<option value="8">8:00 AM</option>
							<option value="9" selected="selected">9:00 AM</option>
							<option value="10">10:00 AM</option>
							<option value="11">11:00 AM</option>
							<option value="12">12:00 PM</option>
							<option value="13">1:00 PM</option>
							<option value="14">2:00 PM</option>
							<option value="15">3:00 PM</option>
							<option value="16">4:00 PM</option>
							<option value="17">5:00 PM</option>
							<option value="18">6:00 PM</option>
							<option value="19">7:00 PM</option>
							<option value="20">8:00 PM</option>
							<option value="21">9:00 PM</option>
							<option value="22">10:00 PM</option>
							<option value="23">11:00 PM</option>
							<option value="24">12:00 PM</option>
						</select>
					</td>
					<td>
						-to-
					</td>
					<td>
						<select name={this.props.elementID} id={this.props.elementID}>
							<option value="0">12:00 AM</option>
							<option value="1">1:00 AM</option>
							<option value="2">2:00 AM</option>
							<option value="3">3:00 AM</option>
							<option value="4">4:00 AM</option>
							<option value="5" selected="selected">5:00 AM</option>
							<option value="6">6:00 AM</option>
							<option value="7">7:00 AM</option>
							<option value="8">8:00 AM</option>
							<option value="9">9:00 AM</option>
							<option value="10">10:00 AM</option>
							<option value="11">11:00 AM</option>
							<option value="12">12:00 PM</option>
							<option value="13">1:00 PM</option>
							<option value="14">2:00 PM</option>
							<option value="15">3:00 PM</option>
							<option value="16">4:00 PM</option>
							<option value="17">5:00 PM</option>
							<option value="18">6:00 PM</option>
							<option value="19">7:00 PM</option>
							<option value="20">8:00 PM</option>
							<option value="21">9:00 PM</option>
							<option value="22">10:00 PM</option>
							<option value="23">11:00 PM</option>
							<option value="24">12:00 PM</option>
						</select>
					</td>
				</tr>
		)
	}
}