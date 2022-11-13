import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PlayerDetails from "../components/PlayerDetails";
import ScrollToTop from "../components/ScrollToTop";

function AllPlayersPage() {


      const [isLoading, setIsLoading] = useState(true);
      const [loadedPlayers, setLoadedPlayers] = useState([]);
      const [query, setQuery] = useState("")

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
        // return (
        //   <section>
        //     <p>Loading...</p>
        //   </section>
        // );
        return (<Loading/>)
      }

      return (

            <div>
              <h1>All Players</h1>
              <div className={"centered"}>
                    <input placeholder="Fillter by name"  onChange={event => setQuery(event.target.value)} style={{width:"200px"}}></input>
                </div>
              <table>
              <tbody>
               {
               
               loadedPlayers.filter(p => {
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
                                  <PlayerDetails player={player} hideCheckbox={true}/>
                                </td> 
                            </tr>
                    )
                }   ) }
                </tbody>
              </table>
              <ScrollToTop/>
      </div>);
}
export default AllPlayersPage;

