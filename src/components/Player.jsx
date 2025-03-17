import React, { useState } from 'react';

const Player = (props) => {

    const [isEditing,setEditing] = useState(false);

    function Edit(){
        if(isEditing === false){
          setEditing(true);
        }else{
          setEditing(false);
        }
    }

    let content = <span className="player-name">{props.name}</span> ;

    let buttonName = "Edit";

    if (isEditing === true) {
      content = <input type="text" required />;
      buttonName = "Save";
    }

  return (
    <li>
    <span className="player">
      {content}
      <span className="player-symbol">{props.symbol}</span>
    </span>
    <button onClick={Edit}>{buttonName}</button>
  </li>
  )
}

export default Player;
