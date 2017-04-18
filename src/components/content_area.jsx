import React from 'react';
import { connect } from 'react-redux';
import * as NavigationActions from '../actions/navigation';
import PageHeader from './pageHeader';
import Sidebar from './sidebar';

const select = (state)=>({
  sidebarOpen: state.navigation.sidebarOpen
});

export class ContentArea extends React.Component {

  render() {
    const overlayClass = this.props.sidebarOpen ? "overlay overlay-open" : "overlay";
    return (
      <div className="main-content">
        <PageHeader
          pageName={this.props.pageName}
          sidebarOpen={this.props.sidebarOpen}
          toggleSidebar={this.props.toggleSidebar}
        />
        <Sidebar
          sidebarOpen={this.props.sidebarOpen}
          toggleSidebar={this.props.toggleSidebar}
        />
        <div className={overlayClass} onClick={() => this.props.toggleSidebar(false)} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(select, NavigationActions)(ContentArea);
