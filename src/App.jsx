import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player"

function App() {
  
  const[activePlayer,setActivePlayer]=useState("X");

  function handlePlayer(){
    setActivePlayer((currentPlayer)=>currentPlayer === "X" ? "O" : "X")
  }

  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer==="X"}></Player>
        <Player name="Player 2" symbol="O" isActive={activePlayer==="O"}></Player>
      </ol>
      <GameBoard onSelectSquare={handlePlayer} playerSymbol={activePlayer}></GameBoard>
      </div>
      GAMELOG - MOVE 1
    </main>
  );
}

export default App
