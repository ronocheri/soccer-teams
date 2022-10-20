import React, { useState } from 'react';

function PlayerDetails(props) {

//click handling functions
    function addPlayer(event)
    {
            //console.log(props.player)
            var player=props.player
            // console.log(player)
            const newPlayersList=[player,...props.playersList]
            // console.log(newPlayersList)
            props.changedPlayerList(newPlayersList)

    }

    function removePlayer(event)
    {
       
        var player=props.player;
        // console.log(player.id+" "+player.fName)
        const newPlayersList=[...props.playersList].filter(p=>p.id!==player.id)
        // console.log(newPlayersList)
        props.changedPlayerList(newPlayersList)

    }

    function handleCheckBoxClick(event)
    {
        if(event.target.checked)
            addPlayer()
        else
            removePlayer()
    }


    return (
        <div>
            <h3>{props.player.fName+" "+props.player.lName}</h3>
            <p>Rank: {props.player.rank}</p>
            <img src={props.player.imageURL} alt={props.player.imageURL} ></img>
            <input type="checkbox" onChange={handleCheckBoxClick} id={props.player.id} className='checkBoxPlayer' defaultChecked={false}></input>
            {/* {toAdd &&<button id={props.player.id} onClick={addPlayer}>+</button>}<br/>
            {!toAdd &&<button onClick={deletePlayer}>-</button>} */}
            
        </div>
    )
}

export default PlayerDetails;

