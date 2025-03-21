import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player"
import Log from "./components/Log";

//helper function

function derivedActivePlayer(gameTurns){
  let currentPlayer = "X";

  if(gameTurns.length>0 && gameTurns[0].player ==="X"){
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  
  const[gameTurns,setGameTurns]=useState([]);

  //const[activePlayer,setActivePlayer]=useState("X");

  const activePlayer = derivedActivePlayer(gameTurns);

  function handlePlayer(rowI,colI){
    // setActivePlayer((currentPlayer)=>currentPlayer === "X" ? "O" : "X");
    setGameTurns((turnBefore)=>{

      const currentP = derivedActivePlayer(turnBefore);
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
