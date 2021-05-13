# Overview
This assignment is to help you recap and do all/most of the things we’ve covered in class
this day. (React 101)

Instructions
1. Open a new codesandbox project with react framework
2. Create a new class component
3. Create a state with name, age, address.
4. Create some html tags to show the states values
5. Also make a button tag, and make it so that the Name changes text
(anything is fine) when button is pressed

App.js
```js
import React from "react";
// Add CSS if you want to change design
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
```

Bonus Question!
You have 10 names in an array.
Make it so that the 1 text shows each time and shows every 5 seconds.