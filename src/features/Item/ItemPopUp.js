// pop up for each item for more informtation

import React, {Component} from "react";

export default class ItemPopUp extends Component {
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="popup">
                <div className="popup_content">
                    <span className="close" onClick={this.handleClick}>&times</span>
                </div>
            </div>
        )
    }
}