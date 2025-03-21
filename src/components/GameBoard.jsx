import React, { useState } from 'react'

const GameBoard = (props) => {

  return (
    <ol id="game-board">
        {props.board.map((row,rowI)=>(
            <li key={rowI}>
                <ol>
                    {row.map((column,columnI)=>(
                        <li key={columnI}>
                            <button onClick={()=>props.onSelectSquare(rowI,columnI)} disabled={column!==null}>{column}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
  )
}

export default GameBoard