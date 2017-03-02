import React from "react";
import MaterialButton from './material_components/material_button';

export default class PageHeader extends React.Component {
    render(){
        return(
            <div className="paper-2 header">
                <MaterialButton type="flat">
                    <i className="material-icons">menu</i>
                </MaterialButton>
                <h3>{this.props.pageName}</h3>
            </div>
        );
    }
}
