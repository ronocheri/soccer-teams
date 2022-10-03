
import React, { useState } from 'react';
import TeamsDivision from './TeamsDivision';
import PlayersData from "../DB/PlayersData";
import PlayerDetails from "./PlayerDetails";

function ChoosePlayers(props) {
    const [rank, setRank] = useState(1);
    const [showResults, setShowResults] = useState(false);
   const [playersList, setPlayersList]= useState([]);

    const PLAYERS=PlayersData //json file

    function goNext(event) {
        if(playersList.length>props.numOfTeams*5)
            alert("You have to remove " + (playersList.length-props.numOfTeams*5) +" players from the list")
        else if(playersList.length<props.numOfTeams*5)
            alert("You have to add  " + (props.numOfTeams*5-playersList.length) +" more players")
        else
            setShowResults(true)
    }

    const AllPlayers = PLAYERS.map((player, index)=>
    {
        return (
                <tr key={index}>
                    <td key={index}>
                        <PlayerDetails player={player} playersList={playersList} changedPlayerList={setPlayersList}/>
                    </td>
                </tr>
        )
    }
)

    return (
        <div>
            {!showResults && <div>
                <h1>Choose Players</h1>
                <h4>You have to choose {props.numOfTeams} teams ({props.numOfTeams*5} players)</h4>
                <h5>Number of players: {playersList.length}</h5>
                <table>
                    <tbody>   
                   {AllPlayers}
                    </tbody>
                </table>
                <button onClick={goNext}>Next</button>  
            </div>}
                {showResults && <TeamsDivision teamsList={playersList}/>}
        </div>
        
    )
}

export default ChoosePlayers;
