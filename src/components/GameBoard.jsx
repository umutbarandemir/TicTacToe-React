import React from 'react'

const initalGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

const GameBoard = () => {
  return (
    <ol id="game-board">
        {initalGameBoard.map((row,rowI)=>(
            <li key={rowI}>
                <ol>
                    {row.map((column,columnI)=>(
                        <li key={columnI}>
                            <button>{column}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
  )
}

export default GameBoard