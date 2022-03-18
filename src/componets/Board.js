import React from 'react';
import Square from './Square';
import "./Square.style.css";

export const Board = ({board,handleSquareclick,winnerSquares}) => {
  console.log("board ollage")
  

  const rendersquare =(position)=>{
    const isWinningSquare=winnerSquares.includes(position)
    console.log( "isWinningSquare"+ isWinningSquare)
    return <Square value={board[position]} 
    isWinningSquare={isWinningSquare} 
    onClick={()=>{
      console.log("square olage") 
      handleSquareclick(position)
    }}/>

  }
  return (
    <div>
        <div>
          {rendersquare(0)}
          {rendersquare(1)}
          {rendersquare(2)}
        </div>
        <div>
          {rendersquare(3)}
          {rendersquare(4)}
          {rendersquare(5)}
        </div>
        <div>
          {rendersquare(6)}
          {rendersquare(7)}
          {rendersquare(8)}
        </div>
    </div>
  )
}
