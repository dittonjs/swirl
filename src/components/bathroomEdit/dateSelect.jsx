import React from 'react';
import ApplicationRoute from '../application_route';
import $ from 'jquery';

export default class DateSelect extends ApplicationRoute {
	getTimeRange(){
		var openTime;
		var closeTime;
		var id = this.props.dayID;
		if($("#" + id + ":checked").length > 0){
			openTime = this.refs.openTime.value;
			closeTime = this.refs.closeTime.value;
		}else{
			openTime = -1;
			closeTime = -1;
		}
		return {
			openTime: openTime,
			closeTime: closeTime,
		}
	}
    render() {
        return(
			<tr>
				<td>
					<input type="checkbox" name={this.props.dayID} id={this.props.dayID} />
					<label htmlFor={this.props.dayID}>{this.props.dayName}</label>
				</td>
					<td>
						<select ref="openTime" name={this.props.elementID} id={this.props.elementID}>
							{ /*TODO FIX THE VALUE HERE*/}
							<option value="12:00 AM">12:00 AM</option>
							<option value="1:00 AM">1:00 AM</option>
							<option value="2:00 AM">2:00 AM</option>
							<option value="3:00 AM">3:00 AM</option>
							<option value="4:00 AM">4:00 AM</option>
							<option value="5:00 AM">5:00 AM</option>
							<option value="6:00 AM">6:00 AM</option>
							<option value="7:00 AM">7:00 AM</option>
							<option value="8:00 AM">8:00 AM</option>
							<option value="9:00 AM" selected="selected">9:00 AM</option>
							<option value="10:00 AM">10:00 AM</option>
							<option value="11:00 AM">11:00 AM</option>
							<option value="12:00 AM">12:00 PM</option>
							<option value="1:00 PM">1:00 PM</option>
							<option value="2:00 PM">2:00 PM</option>
							<option value="3:00 PM">3:00 PM</option>
							<option value="4:00 PM">4:00 PM</option>
							<option value="5:00 PM">5:00 PM</option>
							<option value="6:00 PM">6:00 PM</option>
							<option value="7:00 PM">7:00 PM</option>
							<option value="8:00 PM">8:00 PM</option>
							<option value="9:00 PM">9:00 PM</option>
							<option value="10:00 PM">10:00 PM</option>
							<option value="11:00 PM">11:00 PM</option>
							<option value="12:00 AM">12:00 AM</option>
						</select>
					</td>
					<td>
						-to-
					</td>
					<td>
						<select ref="closeTime" name={this.props.elementID} id={this.props.elementID}>
							<option value="12:00 AM">12:00 AM</option>
							<option value="1:00 AM">1:00 AM</option>
							<option value="2:00 AM">2:00 AM</option>
							<option value="3:00 AM">3:00 AM</option>
							<option value="4:00 AM">4:00 AM</option>
							<option value="5:00 AM">5:00 AM</option>
							<option value="6:00 AM">6:00 AM</option>
							<option value="7:00 AM">7:00 AM</option>
							<option value="8:00 AM">8:00 AM</option>
							<option value="9:00 AM">9:00 AM</option>
							<option value="10:00 AM">10:00 AM</option>
							<option value="11:00 AM">11:00 AM</option>
							<option value="12:00 PM">12:00 PM</option>
							<option value="1:00 PM">1:00 PM</option>
							<option value="2:00 PM">2:00 PM</option>
							<option value="3:00 PM">3:00 PM</option>
							<option value="4:00 PM">4:00 PM</option>
							<option value="5:00 PM" selected="selected">5:00 PM</option>
							<option value="6:00 PM">6:00 PM</option>
							<option value="7:00 PM">7:00 PM</option>
							<option value="8:00 PM">8:00 PM</option>
							<option value="9:00 PM">9:00 PM</option>
							<option value="10:00 PM">10:00 PM</option>
							<option value="11:00 PM">11:00 PM</option>
							<option value="12:00 PM">12:00 PM</option>
						</select>
					</td>
				</tr>
		)
	}
}
