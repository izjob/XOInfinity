import { use, useState } from 'react'
import './App.css'

const TURNS = {
  x: 'X',
  o: 'O'
}

//para borrar guardas posiciones en listas ,borras la primera y añades la nueva
//a la 5 se borra
//a la 4 se comprueba y se borra
//a la 4 se borra sin comprobar
const Square = ({children,updateBoard, index}) =>{

  const handleClick=()=>{
    updateBoard(index)
  }

  return(
    <div className='square' onClick={handleClick}>
      {children}      
    </div>
  )
}







function App() {
  const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const checkWinner = (boardToCheck)=>{
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if (boardToCheck[a] && boardToCheck[a]===boardToCheck[b] && boardToCheck[b]===boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
  }
  const [board,setBoard] = useState(Array(9).fill(null))
  
  const [turn,setTurn] = useState(TURNS.x)

  const [winner,setWinner] = useState(null)


  const updateBoard = (index) =>{
    if (board[index]||winner) return

    const newBoard=[...board]
  
    newBoard[index] = turn
    setBoard(newBoard)
  
    const newTurn = turn===TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    const newWinner =checkWinner(newBoard)
    if (newWinner) setWinner(newWinner)


  }

  return (
    <main className='board'>
      <h1>XOInfinity</h1>
      <section className='game'>
        {
            board.map((_,index) =>{
              return (
                <Square 
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                > 
                <span>{board[index]} </span>                           
                </Square>
              )
            })
        }
        
      </section>
      <h2>turn:</h2>
      <section className='turn'>
        <Square>{turn}</Square>
      </section>
    </main>
  )
}

export default App
