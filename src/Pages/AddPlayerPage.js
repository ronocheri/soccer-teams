import NewPlayerForm from "../components/NewPlayerForm";
import PlayersData from "../DB/PlayersData";
function AddPlayerPage() {

    const PLAYERS=PlayersData //json file

    function addPlayerHandler(PLAYERS) {
        console.log("AddPlayerPage")
        fetch(
          'https://teamscreator-f003c-default-rtdb.firebaseio.com/players.json',
          {
            method: 'POST',
            body: JSON.stringify(PLAYERS),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ).then(() => {
          console.log("OK!") 
        });
      }
    
      return (
        <section>
          <h1>Add New Player</h1>
          <NewPlayerForm onAddPlayer={addPlayerHandler} playersList={PLAYERS}/>
        </section>
      );
    }

export default AddPlayerPage;

