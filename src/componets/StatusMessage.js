import React from 'react'


export const StatusMessage =({winner,current}) => {
    const noMoveLeft =current.board.every((el)=>el!==null)
    return (
//   
//   const message= winner?`winner is ${winner}`:`next player is ${current.isNextX?'X':'O'}`
    <h2>
        {winner &&`winner is ${winner}`}
        {!winner && !noMoveLeft&&`next player is ${current.isNextX?'X':'O'}`}
        {!winner && noMoveLeft && 'X and O had tie'}
        
    </h2>
  )
}

export default StatusMessage