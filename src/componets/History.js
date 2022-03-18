import React from 'react'

export const History = ({history,moveTo,currentmove}) => {
  return (
    <ul>
      {
        history.map((_,move)=>{
          return <li key={move}><button type="button"
          onClick={()=>{
            moveTo(move)
          }}
          style={{fontWeight:move===currentmove?'bold':'normal'}}
          >{ 
             move===0?'go to game start':`go to move#${move}`
             }
             </button></li>  
        })
      }      
    </ul>
  )
}

export default History