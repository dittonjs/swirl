import React from 'react';
import _ from "lodash";
import ApplicationRoute from '../application_route';
import LeaderboardTableHeader from './lb_tableheader';
import LeaderboardTableRow from './lb_tablerow';

export default class Leaderboards extends ApplicationRoute {
  getLeaderBoardRows(){
    let users = [{userName:"Namer", userPoints:40}, {userName:"Noway", userPoints:10000}, {userName:"Namad", userPoints:50}];
    users = _.sortBy(users, ["userPoints"]).reverse();
    return _.map(users, (user)=>{
      return <LeaderboardTableRow userName={user.userName} userPoints={user.userPoints}/>
    });
  }
  render(){
    return (
      <div>
        <table>
          <LeaderboardTableHeader headerText="Table Header"/>
          {this.getLeaderBoardRows()}
        </table>
      </div>
    );
  }
}
