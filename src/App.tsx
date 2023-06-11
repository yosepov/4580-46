import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyButton } from './Components/MyButton'
import { AdirButton } from './Components/AdirButton';
import { OfekButton } from './Components/ofekButton';
import { FerasButton } from './Components/ferasButton';
import { OmriButton } from './Components/OmriButton';
import { IsraelButton } from './Components/IsraelButton';
import { ZoharButton } from './Components/ZoharButton';
import { YoniButton } from './Components/YoniButton';
import { FadizButton } from './Components/FadizButton';
import { SaoButton } from './Components/SaoButton';

function App() {
    console.log(logo)
  return (
    <div className="App">
      <header className="App-header">
        <AdirButton />
        <OfekButton />
        <FerasButton />
        <OmriButton />
        <IsraelButton />
        <ZoharButton />
        <YoniButton />
        <FadizButton />
        <SaoButton />
      </header>
    </div>
  );
}



export default App;
