import { StrictMode } from "react";
import ReactDOM from 'react-dom';

// import Blog from './Blog';
import App from './App';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    {/* <Blog /> */}
  </StrictMode>,
  rootElement
);