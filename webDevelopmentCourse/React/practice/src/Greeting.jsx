import React from "react";

class Greeting extends React.Component {

render() {
    return (
        <>
            <h1 className="sentence">{this.props.greet}</h1>
            <button onClick={this.props.toggleComing}>Hi!</button>
            <button onClick={this.props.toggleLeaving}>Bye!</button>
        </>
    );
}
}

export default Greeting;