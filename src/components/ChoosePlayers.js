
import React,{ useEffect, useState } from "react";
import TeamsDivision from './TeamsDivision';
import PlayerDetails from "./PlayerDetails";
import Loading from "./Loading";
import ScrollToTop from "./ScrollToTop";

function ChoosePlayers(props) {
    const [rank, setRank] = useState(1);
    const [showResults, setShowResults] = useState(false);
   const [playersList, setPlayersList]= useState([]);
   const [playersListPerRank, setPlayersListPerRank]= useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [loadedPlayers, setLoadedPlayers] = useState([]);
   const [query, setQuery] = useState("")

   const NUMBER_OF_PLAYERS_IN_TEAM=5
    //const PLAYERS=PlayersData //json file



      useEffect(() => {
        setIsLoading(true);
        fetch(
          'https://teamscreator-f003c-default-rtdb.firebaseio.com/players.json',
        )
          .then((response) => {
            //console.log(response)
            return response.json();
          })
          .then((data) => {
            const players = [];

            for (const key in data) {
              const player = {
                id: key,
                ...data[key]
              };
    
             //console.log(player)
             if(player.id!='0' ) 
                players.push(player);
            }
    
            setIsLoading(false);
            setLoadedPlayers(players);
          });
      }, []);
    
      if (isLoading) {
        return ( <Loading/>);
      }

    // TO-DO
    //   function unCheckedCheckBox()
    //   {
    //     var checkboxes = document. querySelectorAll('input[type=”checkbox”]');
    //     for (var checkbox of checkboxes) {
    //         checkbox. checked = false
    //     }
    //   }

    function goNext(event) {
       

        if(playersListPerRank.length>props.numOfTeams)
            alert("You have to remove " + (playersListPerRank.length-props.numOfTeams) +" players from the list")
        else if(playersListPerRank.length<props.numOfTeams)
            alert("You have to add  " + (props.numOfTeams-playersListPerRank.length) +" more players")
        else
        {
            //unCheckedCheckBox() - TO-DO
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

    //TO-DO
    function randomAgain()
    {
       
          setIsLoading(true);

          for(let j=1;j<=5;j++) //for each rank
            {
                const tempArray=[];
                for(let i=0;i<playersList.length;i++)
                {
                    
                if(playersList[i].rank===j)
                    {
                        tempArray.push(playersList[i])  
                    }
                    if(tempArray.length==props.numOfTeams)
                    {
                        console.log(tempArray, j)
                        setPlayersListPerRank(tempArray) //add the ranked players list to all players list
                        randomizeTeams()
                        break;

                    }
                }

            }

            setIsLoading(false);
            console.log(playersList)
      
        if (isLoading) {
         
          return (<Loading/>)
        }
 
    }

    const AllPlayers = loadedPlayers.filter(p=>p.rank===rank)
    .filter(p => {
        if (query === '') 
        {
          return true;
        } 
        else if(p.fName.toLowerCase().includes(query.toLowerCase()) ||
                p.lName.toLowerCase().includes(query.toLowerCase())) 
        {
              return true;
                         
        }
          return false;
        }
    )
    .map((player, index)=>
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
                <div className={"centered"}>
                    <input placeholder="Fillter by name"  onChange={event => setQuery(event.target.value)} style={{width:"200px"}}></input>
                </div>
                <table>
                    <tbody>   
                   {AllPlayers}
                    </tbody>
                </table>
                <ScrollToTop/>
                <button onClick={goNext}>Next</button>  
            </div>}
                {showResults && 
                <div>
                    <TeamsDivision teamsList={playersList} numOfTeams={props.numOfTeams}/>
                    <button onClick={randomAgain} hidden>Random again</button>
                </div>
                }
        </div>
        
    )
}

export default ChoosePlayers;
