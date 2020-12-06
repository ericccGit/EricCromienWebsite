import React from 'react';
//import logo from './logo.svg';
import './App.css';



function App() {

  const peices = [];
  
  
  for(let i = 0; i < 6; i++){
   peices.push({cName: `AnimatedLogoPeice-${i}`, src: `/Logo_${30 + 60*i}.svg`})
  }
  

  return (
    <div className="App">
      <div className="Logo-area">
        {peices && peices.map(p => {return (
          <div className={p.cName}>
          <div className="App-logo-filler"/>
          <img src={p.src} className="logo-peice" alt="logo" />
        </div>
        )})}
      </div>
    </div>
  );
}

export default App;

  /*
<div className="AnimatedLogoPeice-0">
          <div className="App-logo-filler"/>
          <img src="/Logo_30.svg" className="logo-peice" alt="logo" />
        </div>


        <div className="AnimatedLogoPeice">
          <div className="App-logo-filler"/>
          <img src="/Logo_90.svg" className="logo-peice" alt="logo" />
        </div>
        <div className="AnimatedLogoPeice">
          <div className="App-logo-filler"/>
          <img src="/Logo_150.svg" className="logo-peice" alt="logo" />
        </div>
        <div className="AnimatedLogoPeice">
          <div className="App-logo-filler"/>
          <img src="/Logo_210.svg" className="logo-peice" alt="logo" />
        </div>
        <div className="AnimatedLogoPeice">
          <div className="App-logo-filler"/>
          <img src="/Logo_270.svg" className="logo-peice" alt="logo" />
        </div>
        <div className="AnimatedLogoPeice">
          <div className="App-logo-filler"/>
          <img src="/Logo_330.svg" className="logo-peice" alt="logo" />
        </div>
        */