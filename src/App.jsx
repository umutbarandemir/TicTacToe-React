import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player"
import Log from "./components/Log";

function App() {
  
  const[gameTurns,setGameTurns]=useState([]);

  const[activePlayer,setActivePlayer]=useState("X");

  function handlePlayer(rowI,colI){
    setActivePlayer((currentPlayer)=>currentPlayer === "X" ? "O" : "X");
    setGameTurns((turnBefore)=>{

      let currentP = "X";

      if(turnBefore.length>0 && turnBefore[0].player ==="X"){
        currentP = "O";
      }

      const updatedTurns = [{square:{row:rowI,col:colI},player:currentP},...turnBefore];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer==="X"}></Player>
        <Player name="Player 2" symbol="O" isActive={activePlayer==="O"}></Player>
      </ol>
      <GameBoard onSelectSquare={handlePlayer} turns={gameTurns}></GameBoard>
      </div>
      <Log gameLog={gameTurns}></Log>
    </main>
  );
}

export default App
