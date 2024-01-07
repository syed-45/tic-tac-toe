'use client'
import { useState, useEffect } from 'react'
import { Square } from './Square'
type squareType = '' | 'O' | 'X'

export default function Home() {
  const [status, setStatus] = useState('Next player: X')
  const [squares, setSquares] = useState<squareType[]>(Array(9).fill(''))

  function resetGame() {
    setSquares(Array(9).fill(''))
  }

  function handleSquareClick(index:number) {
    if (status.includes('Winner')) {
      alert('reset game!')
    } else if (squares[index]!=='') {
      
    } else {
    setSquares((prev) => {
      const newSquares: squareType[] = [...prev]
      newSquares[index] = status.slice(-1) as squareType
      return newSquares
    })
    }
  }

  useEffect(()=>{
    if (squares[0] === 'X' && squares[1] === 'X'  && 'X' === squares[2]) {
      setStatus('Winner: X')
    } else if (squares[3] === 'X' && squares[4] === 'X'  && 'X' === squares[5]) {
      setStatus('Winner: X')
    } else if (squares[6] === 'X' && squares[7] === 'X'  && 'X' === squares[8]) {
      setStatus('Winner: X')
    }
    else if (squares[0] === 'X' && squares[3] === 'X'  && 'X' === squares[6]) {
      setStatus('Winner: X')
    }
    else if (squares[1] === 'X' && squares[4] === 'X'  && 'X' === squares[7]) {
      setStatus('Winner: X')
    }
    else if (squares[2] === 'X' && squares[5] === 'X'  && 'X' === squares[8]) {
      setStatus('Winner: X')
    }
    else if (squares[6] === 'X' && squares[7] === 'X'  && 'X' === squares[8]) {
      setStatus('Winner: X')
    } else if (squares[0] === 'X' && squares[4] === 'X'  && 'X' === squares[8]) {
      setStatus('Winner: X')
    } else if (squares[2] === 'X' && squares[4] === 'X'  && 'X' === squares[6]) {
      setStatus('Winner: X')
    }  else if (squares[0] === 'O' && squares[1] === 'O'  && 'O' === squares[2]) {
      setStatus('Winner: O')
    } else if (squares[3] === 'O' && squares[4] === 'O'  && 'O' === squares[5]) {
      setStatus('Winner: O')
    } else if (squares[6] === 'O' && squares[7] === 'O'  && 'O' === squares[8]) {
      setStatus('Winner: O')
    }
    else if (squares[0] === 'O' && squares[3] === 'O'  && 'O' === squares[6]) {
      setStatus('Winner: O')
    }
    else if (squares[1] === 'O' && squares[4] === 'O'  && 'O' === squares[7]) {
      setStatus('Winner: O')
    }
    else if (squares[2] === 'O' && squares[5] === 'O'  && 'O' === squares[8]) {
      setStatus('Winner: O')
    }
    else if (squares[6] === 'O' && squares[7] === 'O'  && 'O' === squares[8]) {
      setStatus('Winner: O')
    } else if (squares[0] === 'O' && squares[4] === 'O'  && 'O' === squares[8]) {
      setStatus('Winner: O')
    } else if (squares[2] === 'O' && squares[4] === 'O'  && 'O' === squares[6]) {
      setStatus('Winner: O')
    } 
    else if (!squares.includes('')) {
      setStatus('Tie')
    }
    else if (status==='Next player: X') {
      setStatus('Next player: O')
    } else {
      setStatus('Next player: X')
    }
    },[squares])

        
    
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div className='status'></div>
        <div className='status'>{status}</div>
        <main className='nine-squares'>
        {squares.map((squareSymbol,index) => {
          return (
          <Square squareSymbol={squareSymbol} status={status} handleSquareClick={handleSquareClick} index={index} key={index}/>
          )
        })
        }
        </main>
        <button className='mx-auto px-4 py-2 mt-3 rounded border border-blue-700' onClick={resetGame}>RESET</button>
      </div>
    )
  
}
