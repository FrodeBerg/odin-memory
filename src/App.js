import './App.css';
import { useState } from "react";


function App() {
  let [numbers, setNumbers] = useState([])
  let [level, setLevel] = useState(0)
  let [score, setScore] = useState(0)
  let [highScore, setHighScore] = useState(0)

  function levelUp() {

  }

  function gameOver() {

  }

  function click() {
    
  }

  return (
    <div>
      <div className='scores'>
        <h2>High Score: <span id='highScore'></span></h2>
        <h2>Score: <span id='score'></span></h2>
      </div>
      <div>
        <h3>Click on every number only once!</h3>
        <GameBoard /> 
      </div>
    </div>
  );
}

function GameBoard(){
  return (
    <div className='board'>

    </div>
  )
}

export default App;
