import React, { useState } from 'react'

const initalGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

const GameBoard = (props) => {

    // const[gameboard,setGameBoard]=useState(initalGameBoard);

    // function playGame(rowI,columnI){
    //     setGameBoard((oldgameboard)=>{
    //         const updatedGameBoard = [...oldgameboard.map(innerArray => [...innerArray])]
    //         updatedGameBoard[rowI][columnI] =props.playerSymbol;
    //         return updatedGameBoard;
    //     });

    //     props.onSelectSquare();
    // }

    let gameBoard = initalGameBoard;

    for(const turn of props.turns){
        const {square, player} = turn;

        const { row, col} = square;

        gameBoard[row][col] = player;
    }

  return (
    <ol id="game-board">
        {gameBoard.map((row,rowI)=>(
            <li key={rowI}>
                <ol>
                    {row.map((column,columnI)=>(
                        <li key={columnI}>
                            <button onClick={()=>props.onSelectSquare(rowI,columnI)}>{column}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
  )
}

export default GameBoard