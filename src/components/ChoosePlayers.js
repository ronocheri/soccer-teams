
import React, { useState } from 'react';
import TeamsDivision from './TeamsDivision';
import PlayersData from "../DB/PlayersData";
import PlayerDetails from "./PlayerDetails";

function ChoosePlayers(props) {
    const [rank, setRank] = useState(1);
    const [showResults, setShowResults] = useState(false);
   const [playersList, setPlayersList]= useState([]);
   const [playersListPerRank, setPlayersListPerRank]= useState([]);

   const NUMBER_OF_PLAYERS_IN_TEAM=5

    const PLAYERS=PlayersData //json file

    function goNext(event) {
       

        if(playersListPerRank.length>props.numOfTeams)
            alert("You have to remove " + (playersListPerRank.length-props.numOfTeams) +" players from the list")
        else if(playersListPerRank.length<props.numOfTeams)
            alert("You have to add  " + (props.numOfTeams-playersListPerRank.length) +" more players")
        else
        {
            randomizeTeams()

            if(rank!==5)
            {
                //at the end go to the next rank
                setRank(rank+1)
            }
            else{
                setShowResults(true)
            }
        }      
    }

    function randomizeTeams()
    {
        const tempArray=[];

        for(let i=1;i<=props.numOfTeams;i++)
        {
            let randomIndex = Math.floor((Math.random() * playersListPerRank.length)); //a random player (index)
            playersListPerRank[randomIndex].teamId=i;
            tempArray.push(playersListPerRank[randomIndex])
            playersListPerRank.splice(randomIndex, 1)
        }
        
            const tempList=[...tempArray,...playersList]
            setPlayersList(tempList) //add the ranked players list to all players list
            setPlayersListPerRank([]) //clear the ranked players list
    }

    const AllPlayers = PLAYERS.filter(p=>p.rank===rank).map((player, index)=>
    {
        return (
                <tr key={index}>
                    <td key={index}>
                        <PlayerDetails player={player} playersList={playersListPerRank} changedPlayerList={setPlayersListPerRank}/>
                    </td>
                </tr>
        )
    }    
)

    return (
        <div>
            {!showResults && <div>
                <h1>Choose Players</h1>
                <h4>You have to choose ({props.numOfTeams} players) from rank {rank}</h4>
                <h5>Number of players: {playersListPerRank.length}</h5>
                <table>
                    <tbody>   
                   {AllPlayers}
                    </tbody>
                </table>
                <button onClick={goNext}>Next</button>  
            </div>}
                {showResults && <TeamsDivision teamsList={playersList} numOfTeams={props.numOfTeams}/>}
        </div>
        
    )
}

export default ChoosePlayers;
