// child
import React from "react";

class Greeting extends React.Component {
constructor(props){
    super(props);
}

render() {
    return (
        <>
            <h1 class="sentence">{this.props.greet}</h1>
            <button onClick={this.props.toggleComing}>Hi!</button>
            <button onClick={this.props.toggleLeaving}>Bye!</button>
        </>
    );
}
}

export default Greeting;