# 101-2 React Assignment: practice props

Finishing example: image

1. Open a new codesandbox project with react framework
2. Make a reusable component called “Box”.
3. Box component should be able to receive 2 props,
imageUrl and text (https://icons8.com/icons/set/cdn)
4. Render at least 2 Box Component in the parent
component with different prop values

[Solution](https://codesandbox.io/s/epic-cherry-r0x46?file=/src/App.js)

## Create 4 files in src folder.
Create two type of component, parent and child.
App component is the **parent** and Box is the **child**.

### index.js
Index is creating by default from react. In fact, We edit this file in very specific case.

```js
import { StrictMode } from "react";
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
```

### App.js
This is parent component.
```js
import Box from './Box.jsx';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Box
      imageUrl="https://img.icons8.com/ios-filled/50/000000/maxcdn.png"
      text="MDN"
      />
      <Box
      imageUrl="https://img.icons8.com/pastel-glyph/64/000000/download-from-cloud--v1.png"
      text="Download"
      />
    </div>
  );
}
```

### Box.jsx
This is child component.
```js
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
```

### App.css
CSS should be connected to parent component(App.js)
```css
.App {
  text-align: center;
  font-size: 18px;
}

.box-style {
  width: 500px;
  border: 3px solid gray;
  margin: 10px auto;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 30px;
}

span {
  margin-left: 20px;
  font-weight: 700;
}
```