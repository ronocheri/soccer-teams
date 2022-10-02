import React, { useState } from 'react';

function PlayerDetails(props) {
    const [toAdd, setToAdd] = useState(true);

//click handling functions
function addPlayer(event)
{
        //console.log(props.player)
        var player=props.player
        console.log(player)
        const newPlayersList=[player,...props.playersList]
        console.log(newPlayersList)
        props.changedPlayerList(newPlayersList)

}

    function removePlayer(event)
    {
       
        var player=props.player;
        console.log(player.id+" "+player.fName)
        const newPlayersList=[...props.playersList].filter(p=>p.id!==player.id)
        console.log(newPlayersList)

    }

// Add/Remove checked item from list
// const handleCheck = (event) => {
//     var updatedList = [...checked];
//     if (event.target.checked) {
//       updatedList = [...checked, event.target.value];
//     } else {
//       updatedList.splice(checked.indexOf(event.target.value), 1);
//     }
//     setChecked(updatedList);
//   };

// function deletePlayer(event)
// {
//     var playerID=event.target.id;
//     setToAdd(true)
//     props.changePlayersList(playerID,"delete")
// }

    return (
        <div>
            <h3>{props.player.fName+" "+props.player.lName}</h3>
            <img src={props.player.imageURL}></img>
            <input type="checkbox" onChange={addPlayer} id={props.player.id} className='checkBoxPlayer'></input>
            {/* {toAdd &&<button id={props.player.id} onClick={addPlayer}>+</button>}<br/>
            {!toAdd &&<button onClick={deletePlayer}>-</button>} */}
            
        </div>
    )
}

export default PlayerDetails;

