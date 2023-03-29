import './App.css';
import { useState } from "react";


function App() {
  return (
    <div>
      <div className='scores'>
        <h2>High Score: <span id='highScore'></span></h2>
        <h2>Score: <span id='score'></span></h2>
      </div>
      <div className='board'>
        <h3>Click on every number only once!</h3>
      </div>
    </div>
  );
}

export default App;
