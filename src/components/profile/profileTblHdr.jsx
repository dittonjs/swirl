import React from 'react';

export default class ProfileTblHdr extends React.Component {
  render(){
    return(
      <tr>
        <th>
          {this.props.hdrTxt}
        </th>
      </tr>  
    );
  }
}
