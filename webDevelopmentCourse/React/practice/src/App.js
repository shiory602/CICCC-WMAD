// React から　useStateをインポート (関数コンポーネントにてstateが必要な時に使う)
import React, {useState} from "react";
import './App.css';
import Greeting from "./Greeting";



export default function App() {
  // 新しいstate変数である count を宣言する　(関数コンポーネントにてstateが必要な時に使う)
  const [greet, setGreet] = useState("Hello");

  const toggleLeaving = () => {
    setGreet("You are leaving")
  };

  const toggleComing = () => {
    setGreet("You are coming")
  }

  return (
    <div className="App">
      <Greeting 
        greet={greet}
        toggleLeaving= {toggleLeaving}
        toggleComing= {toggleComing}
      />
    </div>
  );
}
