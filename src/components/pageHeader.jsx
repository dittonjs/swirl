import React from "react";

export default class PageHeader extends React.Component {
    render(){
        const buttonClass = this.props.sidebarOpen ? "float-left menu-button move-right" : "float-left menu-button";
        return(
            <div className="paper-2 header">
                <button className={buttonClass}
                  onClick={() => this.props.toggleSidebar(!this.props.sidebarOpen)}
                >
                    <i className="material-icons">menu</i>
                </button>
                <div className="float-right page-name">{this.props.pageName}</div>
                <div className="clear" />
            </div>
        );
    }
}
