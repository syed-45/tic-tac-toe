'use client'
import { useState, useEffect } from 'react'
import { Square } from './Square'
type squareType = '' | 'O' | 'X'

export default function Home() {
  // oneSquare = {OOrX: O | X | empty}
  // useEffect => if (3 in a row i.e squares[1].OOrX === squares[2].OOrX === squares[3].OOrX... ) => WINNER
  const [status, setStatus] = useState('Next player: X')
  const [squares, setSquares] = useState([{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },
  ]
  )

  function resetGame() {
    setSquares([{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },{
    OOrX: ''
  },
  ])
  }

  function handleSquareClick(index:number) {
    if (status.includes('Winner')) {
      alert('reset game!')
    } else if (squares[index].OOrX!=='') {
      
    } else {
    setSquares((prev) => {
      const newSquares = [...prev]
      newSquares[index] = {
        OOrX: status.slice(-1)
        }
      return newSquares
    })
    }
  }

  useEffect(()=>{
    if (squares[0].OOrX === 'X' && squares[1].OOrX === 'X'  && 'X' === squares[2].OOrX) {
      setStatus('Winner: X')
    } else if (squares[3].OOrX === 'X' && squares[4].OOrX === 'X'  && 'X' === squares[5].OOrX) {
      setStatus('Winner: X')
    } else if (squares[6].OOrX === 'X' && squares[7].OOrX === 'X'  && 'X' === squares[8].OOrX) {
      setStatus('Winner: X')
    }
    else if (squares[0].OOrX === 'X' && squares[3].OOrX === 'X'  && 'X' === squares[6].OOrX) {
      setStatus('Winner: X')
    }
    else if (squares[1].OOrX === 'X' && squares[4].OOrX === 'X'  && 'X' === squares[7].OOrX) {
      setStatus('Winner: X')
    }
    else if (squares[2].OOrX === 'X' && squares[5].OOrX === 'X'  && 'X' === squares[8].OOrX) {
      setStatus('Winner: X')
    }
    else if (squares[6].OOrX === 'X' && squares[7].OOrX === 'X'  && 'X' === squares[8].OOrX) {
      setStatus('Winner: X')
    } else if (squares[0].OOrX === 'X' && squares[4].OOrX === 'X'  && 'X' === squares[8].OOrX) {
      setStatus('Winner: X')
    } else if (squares[2].OOrX === 'X' && squares[4].OOrX === 'X'  && 'X' === squares[6].OOrX) {
      setStatus('Winner: X')
    }  else if (squares[0].OOrX === 'O' && squares[1].OOrX === 'O'  && 'O' === squares[2].OOrX) {
      setStatus('Winner: O')
    } else if (squares[3].OOrX === 'O' && squares[4].OOrX === 'O'  && 'O' === squares[5].OOrX) {
      setStatus('Winner: O')
    } else if (squares[6].OOrX === 'O' && squares[7].OOrX === 'O'  && 'O' === squares[8].OOrX) {
      setStatus('Winner: O')
    }
    else if (squares[0].OOrX === 'O' && squares[3].OOrX === 'O'  && 'O' === squares[6].OOrX) {
      setStatus('Winner: O')
    }
    else if (squares[1].OOrX === 'O' && squares[4].OOrX === 'O'  && 'O' === squares[7].OOrX) {
      setStatus('Winner: O')
    }
    else if (squares[2].OOrX === 'O' && squares[5].OOrX === 'O'  && 'O' === squares[8].OOrX) {
      setStatus('Winner: O')
    }
    else if (squares[6].OOrX === 'O' && squares[7].OOrX === 'O'  && 'O' === squares[8].OOrX) {
      setStatus('Winner: O')
    } else if (squares[0].OOrX === 'O' && squares[4].OOrX === 'O'  && 'O' === squares[8].OOrX) {
      setStatus('Winner: O')
    } else if (squares[2].OOrX === 'O' && squares[4].OOrX === 'O'  && 'O' === squares[6].OOrX) {
      setStatus('Winner: O')
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
        {squares.map((square,index) => {
          return (
          <Square OOrX={square.OOrX} status={status} handleSquareClick={handleSquareClick} index={index}/>
          )
        })
        }
        </main>
        <button className='mx-auto px-4 py-2 mt-3 rounded border border-blue-700' onClick={resetGame}>RESET</button>
      </div>
    )
  
}
