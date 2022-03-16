import React from 'react'
import "./Square.style.css"
const Square = ({ value })=> {
  return (
    <button type="button">
        {value}
    </button>
    )
}

export default Square