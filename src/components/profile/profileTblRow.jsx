import React from 'react';

export default class ProfileTblRow extends React.Component {
  render(){
    return(
      <tr>
        <td>
          {this.props.profileDataName}
        </td>
        <td>
          {this.props.profileData}
        </td>
      </tr>
    );
  }
}
