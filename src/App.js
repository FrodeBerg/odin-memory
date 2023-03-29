import './App.css';
import { useState } from "react";


function App() {
  let [numbers, setNumbers] = useState([1, 2, 3, 4])
  let [clickedNumbers, setClickedNumbers] = useState([])
  let [level, setLevel] = useState(0)
  let [score, setScore] = useState(0)
  let [highScore, setHighScore] = useState(0)

  function levelUp() {
    setLevel(level + 1);
  }

  function gameOver() {
    setLevel(0)
    if (score > highScore) {
      setHighScore(score)
    }
    setScore(0)
    setClickedNumbers([])
  }

  const click = (event) => {
    let id = +event.target.id;
    console.log(id, clickedNumbers)
    if (clickedNumbers.indexOf(id) !== -1) {
      gameOver()
      return 
    }
    setScore(score + 1)
    setClickedNumbers([...clickedNumbers, id])
    if (clickedNumbers.length === numbers.length) {
      levelUp()
      return 
    }
  }

  return (
    <div>
      <div className='scores'>
        <h2>High Score: {highScore}</h2>
        <h2>Score: {score}</h2>
      </div>
      <div>
        <h3>Click on every number only once!</h3>
        <GameBoard click={click} numbers={numbers}/> 
      </div>
    </div>
  );
}

function GameBoard(props){
  return (
    <div className='board'>
      {
        props.numbers.map((number) => (
          <button key={number} onClick={props.click} id={number}>{number}</button>
        ))
      }
    </div>
  )
}

export default App;
