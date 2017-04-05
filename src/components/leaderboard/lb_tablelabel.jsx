import React from 'react';

export default class LeaderboardTableLabel extends React.Component{
  render(){
    return(
      <tr>
        <td className="leaderboard-nameLabel">
          <b>Username</b>
        </td>
        <td className="leaderboard-label">
          <b>Reviews</b>
        </td>
        <td className="leaderboard-label">
          <b>Total Points</b>
        </td>
      </tr>
    );
  }
}
