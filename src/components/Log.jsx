import React, { useState } from 'react'

const Log = (props) => {

  return (
    <ol id="log">
        {props.gameLog.map((data)=><li key={`${data.square.row}${data.square.col}`}>{data.player} selected {data.square.row+1},{data.square.col+1}</li>)}
    </ol>
  )
}

export default Log;