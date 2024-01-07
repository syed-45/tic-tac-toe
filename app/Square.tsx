import React from 'react';

export const Square = (props: any) => {
  return(
    <div className='square' onClick={()=>props.handleSquareClick(props.index)} >{props.squareSymbol}</div>
  )
}