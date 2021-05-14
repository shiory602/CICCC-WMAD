import React from "react";
import './App.css';

export default function App() {
  return (
    <Clickevent />
  );
}


class Clickevent extends React.Component {
  
  state = {
    Greeting: "Hello, how are you?"
  };

  Leaving = () => {
    this.setState({
      Greeting: "See you soon!"
    })
  }

  Coming = () => {
    this.setState({
      Greeting: "Hello, how are you?"
    })
  }

  render() {
      return (
          <>
              <h1 class="sentence">{this.state.Greeting}</h1>
              <button onClick={this.Coming}>Hi!</button>
              <button onClick={this.Leaving}>Bye!</button>
          </>
      );
  }
}