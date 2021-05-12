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

Bonus Question!
You have 10 names in an array.
Make it so that the 1 text shows each time and shows every 5 seconds.

```js
import "./styles.css";
import React from "react";

export default function App() {
  const title = "101React";
  return (
    <div className="App">
      <h1>Assignment {title}</h1>
      <h2>Here is today's work.</h2>
      <CreateProfile />
    </div>
  );
}

export class CreateProfile extends React.Component {
  // Initializing
  state = {
    name: "Alice",
    age: 17,
    address: "Canada",
    canadian: false
  };

  // Updating states
  updateState = () => {
    this.setState({
      name: "Kana",
      age: 19,
      address: "Japan"
      canadian: !this.state.canadian
    });
  };

  render() {
    return (
      <>
        <p>
          Hello, my name is {this.state.name} from {this.state.address}.
        </p>
        <p>I am {this.state.age} years old.</p>
        <p>Nice to meet you!</p>
        <p>{this.state.canadian ? "True" : "False"}</p>
        <button onClick={this.updateState}>ChangeCard</button>
      </>
    );
  }
}
```