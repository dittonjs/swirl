import React from 'react'

export default class LeaderboardTableRow extends React.Component{
  render(){
    return(
      <tr>
        <td>
          {this.props.userName}
        </td>
        <td>
          {this.props.userPoints}
        </td>
      </tr>
    )
  }
}
