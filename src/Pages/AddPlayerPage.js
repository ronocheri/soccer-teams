import NewPlayerForm from "../components/NewPlayerForm";
import PlayersData from "../DB/PlayersData";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig from "../FireBaseConfig.js";
import { useNavigate } from "react-router-dom";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

function AddPlayerPage() {

  const navigate = useNavigate();
    //const PLAYERS=PlayersData //json file

        //address to Main Menu
   function goToMainMenu()
   {
    navigate('/home');
   }


    function addPlayerHandler(player) {
      if(player.rank>5 || player.rank<1)
      {
        alert("Rank must be between 1-5")
        return
      }
//         console.log("AddPlayerPage")
//         let tempArray=[]
//         tempArray=PLAYERS
//         console.log(PLAYERS.length)
//         for(let i=0;i<PLAYERS.length;i++)
//         {
//           let player=PLAYERS[i];
//           console.log(player)
        // fetch(
        //   'https://teamscreator-f003c-default-rtdb.firebaseio.com/players.json',
        //   {
        //     method: 'POST',
        //     body: JSON.stringify(player),
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   }
        // ).then(() => {
        //   console.log("OK!") 
        // });

        set(ref(db, 'players/' + player.id), player)
        .then(() => {
          console.log("Data saved successfully!")
          alert("Player was added successfully!")
          goToMainMenu()
        })
        .catch((error) => {
          alert("Error!")
          console.log("The write failed...!")
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

