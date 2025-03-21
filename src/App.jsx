import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player"
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from "./winning-combinations.js"

const initalGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];


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

  
  let gameBoard = initalGameBoard;

  for(const turn of gameTurns){
      const {square, player} = turn;
      const { row, col} = square;
      gameBoard[row][col] = player;
  }

  let winner=null;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol ){
      winner = firstSquareSymbol;
    }
  
  }

 
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
      {winner ? <p>You WON !!, Player : {winner}</p>:null}
      <GameBoard onSelectSquare={handlePlayer} board={gameBoard}></GameBoard>
      </div>
      <Log gameLog={gameTurns}></Log>
    </main>
  );
}

export default App
