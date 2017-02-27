import React from 'react';

export default class LeaderboardTableLabel extends React.Component{
  render(){
    return(
      <tr>
        <td>
          Username
        </td>
        <td>
          Reviews
        </td>
        <td>
          Total Points
        </td>
      </tr>
    );
  }
}
