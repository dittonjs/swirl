import React from 'react';

export default class ProfileTblHdr extends React.Component {
  render(){
    return(
      <tr>
        <th className="tableHeader" colSpan="2">
          {this.props.hdrTxt}
        </th>
      </tr>
    );
  }
}
