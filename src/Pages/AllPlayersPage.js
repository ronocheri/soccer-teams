import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PlayerDetails from "../components/PlayerDetails";
import ScrollToTop from "../components/ScrollToTop";

function AllPlayersPage() {


      const [isLoading, setIsLoading] = useState(true);
      const [loadedPlayers, setLoadedPlayers] = useState([]);

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
              <table>
              <tbody>
               {loadedPlayers.map((player, index)=>
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

