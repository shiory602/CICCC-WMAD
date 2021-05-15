// これ何？
import React from "react";
import './App.css';
import Box from "./Box";
import loading from "./img/loading.gif"

// Webpack plugin: image-loader

// create-react-app

// ---- Priority 1 ----
// NPM
// Webpack
// Babel

// ---- Priority 2 ----
// css-loader / style-loader
// image-loader
// Webpack Dev Server

// ---- Priority 3 ----
// ESLint
// Jest
// PostCSS

export default function App() {
  const loadingComponent = {
    width: '100%',
    height: '11rem',
    backgroundImage: `url(${loading})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="App">
      <img style={ loadingComponent } className="loading-image" alt="loading" />
      <Box />
    </div>
  );
}

// // ----
// import Box from "./Box";
// // ----


// class Box extends React.Component {
  
//   state = {
//     Greeting: "Hello, how are you?"
//   };

//   Leaving = () => {
//     this.setState({
//       Greeting: "See you soon!"
//     })
//   }

//   Coming = () => {
//     this.setState({
//       Greeting: "Hello, how are you?"
//     })
//   }

//   render() {
//       return (
//           <>
//               <h1 class="sentence">{this.state.Greeting}</h1>
//               <button onClick={this.Coming}>Hi!</button>
//               <button onClick={this.Leaving}>Bye!</button>
//           </>
//       );
//   }
// }
