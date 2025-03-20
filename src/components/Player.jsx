import React, { useState } from 'react';

const Player = (props) => {

    const [isEditing,setEditing] = useState(false);

    const [playerName,setplayerName] = useState(props.name);

    function Edit(){
        // if(isEditing === false){
        //   setEditing(true);
        // }else{
        //   setEditing(false);
        // }

        setEditing((editing)=>!editing) // bir önceki state'i göz önünde bulundurarak state güncelleme -> stateFunction((name)=>!name)
    }

    function changeName(e){
      setplayerName(e.target.value);
    }

    let content = <span className="player-name">{playerName}</span> ;

    let buttonName = "Edit";

    if (isEditing === true) {
      content = <input type="text" value={playerName} onChange={changeName} required />;
      buttonName = "Save";
    }

  return (
    <li className={props.isActive ? "active" : undefined}>
    <span className="player">
      {content}
      <span className="player-symbol">{props.symbol}</span>
    </span>
    <button onClick={Edit}>{buttonName}</button>
  </li>
  )
}

export default Player;
