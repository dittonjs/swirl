import React from 'react';
import PageHeader from './pageHeader';

export default class ContentArea extends React.Component {

  render() {
    return (
      <div className="main-content">
        <PageHeader pageName={this.props.pageName}/>
        {this.props.children}
      </div>
    );
  }
}
