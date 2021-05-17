import React from "react";

class Greeting extends React.Component {
render() {
    return (
        <>
            {/* 最初のstateを表示する */}
            <h1 className="sentence">{this.props.greet}</h1>
            {/* クリックイベントで関数を呼び出してstateを変更 */}
            <button onClick={this.props.toggleComing}>Hi!</button>
            <button onClick={this.props.toggleLeaving}>Bye!</button>
        </>
    );
}
}

export default Greeting;