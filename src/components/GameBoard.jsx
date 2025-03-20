import React, { useState } from 'react'

const initalGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

const GameBoard = (props) => {

    const[gameboard,setGameBoard]=useState(initalGameBoard);

    function playGame(rowI,columnI){
        setGameBoard((oldgameboard)=>{
            const updatedGameBoard = [...oldgameboard.map(innerArray => [...innerArray])]
            updatedGameBoard[rowI][columnI] =props.playerSymbol;
            return updatedGameBoard;
        });

        props.onSelectSquare();
    }

  return (
    <ol id="game-board">
        {gameboard.map((row,rowI)=>(
            <li key={rowI}>
                <ol>
                    {row.map((column,columnI)=>(
                        <li key={columnI}>
                            <button onClick={()=>playGame(rowI,columnI)}>{column}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
  )
}

export default GameBoard