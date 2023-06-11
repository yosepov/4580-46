import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyButton } from './Components/MyButton'

function App() {
    console.log(logo)
  return (
    <div className="App">
      <header className="App-header">
        <MyButton />
      </header>
    </div>
  );
}



export default App;
