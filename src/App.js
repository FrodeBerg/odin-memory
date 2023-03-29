import './App.css';
import { useState, useEffect } from "react";


function App() {
  let [clickedNumbers, setClickedNumbers] = useState([])
  let [level, setLevel] = useState(1)
  let [score, setScore] = useState(0)
  let [highScore, setHighScore] = useState(0)
  let [numbers, setNumbers] = useState([])

  const click = (event) => {
    let id = +event.target.id;
    setScore(score + 1)
    setClickedNumbers([...clickedNumbers, id])
  }

  useEffect(() => {

    function randomNumbers() {
      const randomNumbers = []
      const range = (level + 10) * 2
      for (let i = 0; i < (level + 1) * 2; i += 1) {
        let randomNumber = 0
        do {
          randomNumber = Math.floor(Math.random() * range) + 1;
        } while (!randomNumber || randomNumbers.indexOf(randomNumber) !== -1)
        randomNumbers.push(randomNumber)
      }
      return randomNumbers
    }
  
    function levelUp() {
      setLevel(level + 1);
      setClickedNumbers([], setNumbers(randomNumbers()))    
    }
  
    function gameOver() {
      setLevel(1)
      if (score > highScore) {
        setHighScore(score)
      }
      setScore(0)
      setNumbers(randomNumbers())
      setClickedNumbers([])
    }

    if (clickedNumbers.length === numbers.length) {
      levelUp()
    }  

    if (new Set(clickedNumbers).size !== clickedNumbers.length) {
      gameOver()
    }
  }, [clickedNumbers, highScore, level, numbers.length, score])


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
