import React from 'react'
import "./Square.style.css"
const Square = ({ value , onClick , isWinningSquare})=> {
  console.log("inside square "+isWinningSquare)
  return (
    <button style={{ padding:"50px" , color:"black" , fontWeight:isWinningSquare?'bold':'normal'}}
    type="button" 
    onClick={onClick}>
        {value}
    </button>
    )
}

export default Square