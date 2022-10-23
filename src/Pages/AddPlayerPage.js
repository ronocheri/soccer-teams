import NewPlayerForm from "../components/NewPlayerForm";
import PlayersData from "../DB/PlayersData";
function AddPlayerPage() {

    //const PLAYERS=PlayersData //json file

    function addPlayerHandler(player) {
//         console.log("AddPlayerPage")
//         let tempArray=[]
//         tempArray=PLAYERS
//         console.log(PLAYERS.length)
//         for(let i=0;i<PLAYERS.length;i++)
//         {
//           let player=PLAYERS[i];
//           console.log(player)
        fetch(
          'https://teamscreator-f003c-default-rtdb.firebaseio.com/players.json',
          {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ).then(() => {
          console.log("OK!") 
        });

      //}
    }
      return (
        <section>
          <h1>Add New Player</h1>
          <NewPlayerForm onAddPlayer={addPlayerHandler} />
          {/* <NewPlayerForm onAddPlayer={addPlayerHandler} playersList={PLAYERS}/> */}
        </section>
      );
    }

export default AddPlayerPage;

