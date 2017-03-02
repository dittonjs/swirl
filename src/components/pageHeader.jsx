import React from "react";

export default class PageHeader extends React.Component {
    render(){
        return(
            <div className="paper-2 header">
                <button className="float-left menu-button">
                    <i className="material-icons">menu</i>
                </button>
                <h3 className="float-right">{this.props.pageName}</h3>
                <div className="clear" />
            </div>
        );
    }
}
