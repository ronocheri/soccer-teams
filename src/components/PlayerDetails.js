import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

function PlayerDetails(props) {

    const [isAdded, setIsAdded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsAdded(false);
    }, [props.player.id])
//click handling functions
    function addPlayer(event)
    {
            var player=props.player
            const newPlayersList=[player,...props.playersList]
            props.changedPlayerList(newPlayersList)
    }

    function removePlayer(event)
    {
        var player=props.player;
        const newPlayersList=[...props.playersList].filter(p=>p.id!==player.id)
        props.changedPlayerList(newPlayersList)

    }

    function handleCheckBoxClick(event)
    {
        setIsAdded(!isAdded);
        if(event.target.checked)
            addPlayer()
        else
            removePlayer()

        
    }
 
    function editPlayerClick(player)
    { 
        console.log(player) 
        navigate("/editPlayerPage", {state:{player}});
    }


    return (
        <div>
            <h3>{props.player.fName+" "+props.player.lName+" "}
                {!props.hideEditSymbool &&<  EditIcon onClick={event => editPlayerClick(props.player)} sx={{ fontSize: 32, color: "green" }}/>
            }</h3>
            <p>Rank: {props.player.rank}</p>
            <img src={props.player.imageURL} alt={props.player.imageURL} ></img><br></br>
            <input type="checkbox" onChange={handleCheckBoxClick} checked={isAdded} id={props.player.id} className='checkBoxPlayer' hidden={props.hideCheckbox}></input>
            {/* {toAdd &&<button id={props.player.id} onClick={addPlayer}>+</button>}<br/>
            {!toAdd &&<button onClick={deletePlayer}>-</button>} */}
            
        </div>
    )
}

export default PlayerDetails;

