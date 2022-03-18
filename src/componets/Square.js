import React from 'react'
import "./Square.style.css"
const Square = ({ value , onClick })=> {
  return (
    <button style={{padding:"50px",color:"black"}} 
    type="button" 
    onClick={onClick}>
        {value}
    </button>
    )
}

export default Square