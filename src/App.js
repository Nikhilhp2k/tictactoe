import './App.css';
import { Board } from './componets/Board';
import { History } from './componets/History'
import { StatusMessage } from './componets/StatusMessage'


import React,{useState} from 'react';
import { calculateWinner } from './helpers';


const NEWGAME=[{board:Array(9).fill(null),isNextX:true}]
function App() {
  const [history,setHistory]=new useState(NEWGAME)
  const [currentMove,setCurrentMove]=new useState(0)
  const current = history[currentMove]
  const {winner,winnerSquares}=calculateWinner(current.board)
  console.log(current.board)
  const handleSquareclick=(position)=>{
    if(current.board[position]||winner)
    return;
    setHistory(prev=>{
      const last=prev[prev.length-1]
      const newBoard= last.board.map((square,pos)=>{
        if(pos==position) return last.isNextX?"X":"O";
        return square;
      });
      return prev.concat({board:newBoard,isNextX : !last.isNextX})

    });
    setCurrentMove(prev=>prev+1)
  };
  const moveTo=(move)=>
  {
      setCurrentMove(move)
  }
  const onNewGame=()=>{
      setHistory(NEWGAME)
      setCurrentMove(0)
  }
  console.log(winnerSquares)
  return (
    <div className="App">
      <header className="App-header">
        <div> 
          <h1>TIC RAC TOEW</h1>
          <button type='button' onClick={onNewGame}
          >START NEW GAME</button>
          <StatusMessage winner={winner} current={current}/>
          <Board board={current.board} handleSquareclick={handleSquareclick} winnerSquares={winnerSquares} />
          <History history={history} moveTo={moveTo} currentmove={currentMove}/>          
        </div>
      </header>
    </div>
  );
}

export default App;
