import React from 'react';

export default class LeaderboardTableHeader extends React.Component {
  render(){
    return (
      <tr>
        <th>
        {this.props.headerText}
        </th>
      </tr>
    );
  }
}
