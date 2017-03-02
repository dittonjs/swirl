import React from "react";

export default class PageHeader extends React.Component {
    render(){
        return(
            <div className="paper-2 header">
                <button className="float-left menu-button">
                    <i className="material-icons">menu</i>
                </button>
                <div className="float-right page-name">{this.props.pageName}</div>
                <div className="clear" />
            </div>
        );
    }
}
