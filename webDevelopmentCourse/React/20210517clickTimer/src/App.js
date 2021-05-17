import React, {useState} from 'react'; // useStateを使うために{}でセット
import './App.css';
import Greeting from "./Greeting";
import StudentList from './StudentList';
import loadingImg from './img/loading.gif'

export default function App() {
    // 新しいstate変数である greet を宣言する　(関数コンポーネントにてstateが必要な時に使う)
    const [greet, setGreet] = useState("Hello");
    // stateを変更するための関数をセット
    const toggleLeaving = () => {
      setGreet("You are leaving");
    };
    const toggleComing = () => {
      setGreet("You are coming");
    }
  
  return (
    <div className='App'>
      <h3>challenge 1</h3>
      <Greeting 
        greet={greet}
        toggleLeaving= {toggleLeaving}
        toggleComing= {toggleComing}
      />
      <br />
      <br />
      <br />
      <div className='line'> </div>
      <br />
      <h3>challenge 2</h3>
      <StudentList
        img={loadingImg}
      />
    </div>
  );
  }

