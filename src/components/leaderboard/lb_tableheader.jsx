import React from 'react';

export default class LeaderboardTableHeader extends React.Component {
  render(){
    return (
      <tr>
        <th className="leaderboard-header">
        {this.props.headerText}
        </th>
      </tr>
    );
  }
}
