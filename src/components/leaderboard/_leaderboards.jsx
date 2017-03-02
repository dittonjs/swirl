import React from 'react';
import _ from "lodash";
import LeaderboardTableHeader from './lb_tableheader';
import LeaderboardTableRow from './lb_tablerow';
import LeaderboardTableLabel from './lb_tablelabel';
import RaisedButton from '../material_components/material_button';
import PageHeader from '../pageHeader';

export default class Leaderboards extends React.Component {
  getLeaderBoardRows(){
    //The current users listed are dummy data; Will be retrieved from database later.
    let users = [{userName:"Namer", userReviews:30, userPoints:40}, {userName:"Noway", userReviews:2, userPoints:10000}, {userName:"Namad", userReviews:16, userPoints:50}];
    users = _.sortBy(users, ["userPoints"]).reverse();
    return _.map(users, (user)=>{
      return <LeaderboardTableRow userName={user.userName} userReviews={user.userReviews} userPoints={user.userPoints}/>
    });
  }
  render(){
    return (
      <div>
        <PageHeader pageName="Leaderboards"/>
        <div className="main-content">
          <div className="leaderboard-box">
            <h2>Top Users</h2>
              <RaisedButton>Highest Points</RaisedButton>
              <RaisedButton>Points per Review</RaisedButton>
              <RaisedButton>Most Reviews</RaisedButton>
            <table>
              <LeaderboardTableHeader headerText="Table Header"/>
              <LeaderboardTableLabel/>
              {this.getLeaderBoardRows()}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
