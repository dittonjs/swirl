import React from "react";
import MaterialButton from './material_components/material_button';

export default class pageHeader extends React.Component {
    render(){
        return(
            <div>
                hey
                <MaterialButton>
                    Login
                </MaterialButton>
                <MaterialButton>
                    Leaderboard
                </MaterialButton>
                <MaterialButton>
                    My Account
                </MaterialButton>
            </div>
        );
    }
}
