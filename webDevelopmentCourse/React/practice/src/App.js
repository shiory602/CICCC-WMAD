import React from 'react';
// import './App.css';
import StudentList from './StudentList';
import loadingImg from './img/loading.gif'

export default function App() {

  return (
    <div className='App'>
      <StudentList
        img={loadingImg}
      />
    </div>
  );
}
