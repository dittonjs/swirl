import React from 'react';

export default class ProfileTblRow extends React.Component {
  render(){
    return(
      <tr className="tableRow">
        <td className="tableData">
          {this.props.profileDataName}
        </td>
        <td className="tableData">
          {this.props.profileData}
        </td>
      </tr>
    );
  }
}
