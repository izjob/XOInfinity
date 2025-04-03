import { useState } from 'react'
import './App.css'

const TURNS = {
  x: 'X',
  o: 'O'
}

//para borrar guardas posiciones en listas ,borras la primera y añades la nueva


const Square = ({children,updateBoard, index}) =>{
  return(
    <div className='square' onClick={updateBoard}>
      {children}
    </div>
  )
}
function App() {
  const [board,setBoard] = useState(Array(9).fill(null))
  
  const [turn,setTurn] = useState(TURNS.o)

  const updateBoard = () =>{
    const newTurn = turn===TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
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
                  <span>{index}</span>
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
