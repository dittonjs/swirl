import React from 'react';
import _ from "lodash";
import LeaderboardTableHeader from './lb_tableheader';
import LeaderboardTableRow from './lb_tablerow';
import LeaderboardTableLabel from './lb_tablelabel';
import RaisedButton from '../material_components/material_button';
import PageHeader from '../pageHeader';
import ContentArea from '../content_area';
import {swirlFirebase} from '../../database/firebase_controller';

export default class Leaderboards extends React.Component {
	constructor(){
		super();
		this.state = {
			users:{}
		}
	}
	componentWillMount(){
		 swirlFirebase.DATABASE.ref("users").once("value",(snapshot)=>{
			this.setState({
				users:_.sortBy(_.toArray(snapshot.val()),["leaderBoardPoints"])
			});
		 })
	}
  getLeaderBoardRows(){
    return _.map(this.state.users, (user)=>{
      user.bathroom
      return <LeaderboardTableRow userName={user.displayName} userReviews={_.size(user.reviews)} userPoints={user.leaderBoardPoints}/>
    });
  }
  render(){
    return (
      <ContentArea pageName="Leaderboard">
        <div className="leaderboard-box">
          <div className="paper-3">
            <h2>Top Users</h2>
            <table className="table-style">
                <LeaderboardTableLabel/>
                {this.getLeaderBoardRows()}
            </table>
          </div>
        </div>
      </ContentArea>
    );
  }
}
