import React from "react";
// import './App.css';

export default function App() {
  return (
    <Clickevent />
  );
}

class Clickevent extends React.Component {
  
  state = {
      name: "Shiori Suzuki"
  };

  updateName = () => {
      this.setState({
          name: "Sae"
      });
  }

  render() {
      return (
          <>
              <h2>My name is {this.state.name}</h2>
              <button onClick={this.updateName}>Click me!</button>
          </>
      );
  }
}