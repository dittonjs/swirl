import React from 'react';
import MaterialButton from './material_components/material_button';
import { hashHistory } from 'react-router';
export default class Sidebar extends React.Component {

  goTo(page){
    hashHistory.push(page);
    this.props.toggleSidebar(false);
  }

  render(){
    const className = this.props.sidebarOpen ? "paper-4 sidebar sidebar-open" : "paper-4 sidebar";
    return (
      <div className={className}>
        <div className="sidebar-header"/>
        <div className="sidebar-item">
          <MaterialButton
            type="flat"
            className="sidebar-button"
            onClick={() => this.goTo("/findBathroom")}
          >
            FIND A BATHROOM
          </MaterialButton>
        </div>
        <div className="sidebar-item">
          <MaterialButton
            type="flat"
            className="sidebar-button"
            onClick={() => this.goTo("/bathroomEdit")}
          >
            NEW BATHROOM
          </MaterialButton>
        </div>
        <div className="sidebar-item">
          <MaterialButton
            type="flat"
            className="sidebar-button"
            onClick={() => this.goTo("/profile")}
          >
            PROFILE
          </MaterialButton>
        </div>
        <div className="sidebar-item">
          <MaterialButton
            type="flat"
            className="sidebar-button"
            onClick={() => this.goTo("/leaderboard")}
          >
            LEADERBOARD
          </MaterialButton>
        </div>
        <div className="sidebar-item">
          <MaterialButton
            type="flat"
            className="sidebar-button"
            onClick={() => this.goTo("/")}
          >
            SIGN OUT
          </MaterialButton>
        </div>
      </div>
    );
  }
}
