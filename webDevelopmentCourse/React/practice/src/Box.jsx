// child
import React from "react";

class Box extends React.Component {
    render() {
        return (
            <div className="box-style">
                <img src={this.props.imageUrl} alt="icon" />
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default Box;