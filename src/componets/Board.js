import React from 'react';
import Square from './Square';
import "./Square.style.css";

export const Board = ({board,handleSquareclick}) => {
  console.log("board ollage")


  const rendersquare =(position)=>{
    console.log(position)
    return <Square value={board[position]} 
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
