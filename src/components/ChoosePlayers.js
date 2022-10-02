
import React, { useState } from 'react';
import TeamsDivision from './TeamsDivision';
import PlayersData from "../DB/PlayersData";
import PlayerDetails from "./PlayerDetails";

function ChoosePlayers(props) {
    const [rank, setRank] = useState(1);
    const [showResults, setShowResults] = useState(false);
   const [playersList, setPlayersList]= useState([]);
   
     //const [checked, setChecked] = useState([]);
     const PLAYERS=PlayersData

    function goNext(event) {

        //Add this rank list
        // setListOfPlayersList(current => [...current, playersList]);
        // console.log(listOfplayersList)

        setShowResults(true)

    }

    // function addPlayer(player)
    // {
        
    //     console.log(player)
    //     const newPlayersList=[player,...listOfplayersList]
    //     setListOfPlayersList(newPlayersList)
    //     console.log(newPlayersList)
    //     //setToAdd(false)
    //     //props.changePlayersList(playerID)
    // }

    // function removePlayer(playerID)
    // {
        
    //     console.log(playerID)
    //     const newPlayersList=[...listOfplayersList].filter(player=>player.id!==playerID)
    //     setListOfPlayersList(newPlayersList)
    //     console.log(newPlayersList)
    //     //setToAdd(false)
    //     //props.changePlayersList(playerID)
    // }

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
