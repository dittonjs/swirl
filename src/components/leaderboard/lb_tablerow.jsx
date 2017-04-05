import React from 'react';

export default class LeaderboardTableRow extends React.Component{
  render(){
    return(
      <tr>
        <td className="leaderboard-name">
          {this.props.userName}
        </td>
        <td className="leaderboard-item">
          {this.props.userReviews}
        </td>
        <td className="leaderboard-item">
          {this.props.userPoints}
        </td>
      </tr>
    );
  }
}
