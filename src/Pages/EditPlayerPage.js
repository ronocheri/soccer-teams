import { useNavigate, useRoutes } from "react-router-dom";
import NewPlayerForm from "../components/NewPlayerForm";
import PlayerDetails from "../components/PlayerDetails";
import {useLocation} from 'react-router-dom';
import EditPlayerForm from "../components/EditPlayerForm";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig from "../FireBaseConfig.js";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);


function EditPlayerPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state.player);

   //address to Main Menu
   function goToMainMenu()
   {
      navigate('/home');
   }

    function EditPlayerPageHandler(player) {
      if(player.rank>5 || player.rank<1)
      {
        alert("Rank must be between 1-5")
        return
      }
      set(ref(db, 'players/' + player.id), player)
      .then(() => {
        alert("Player was edited successfully!")
          goToMainMenu()
      })
      .catch((error) => {
        alert("Error!")
        console.log("The write failed...!")
      });


        // fetch(
        //   'https://teamscreator-f003c-default-rtdb.firebaseio.com/players/-NFCaj8I0vQEju3cPPC1',
        //   {
        //     method: 'PUT',
        //     body: JSON.stringify(player),
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'Access-Control-Allow-Origin':'*',
        //       'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
        //     },
        //   }
        // ).then(() => {
        //   console.log("OK!") 
        // });

    }
      return (
        <section>
          <h1>Edit Player Details</h1>
          <EditPlayerForm player={state.player} onEdipPlayer={EditPlayerPageHandler}/>
        </section>
      );
    }

export default EditPlayerPage;

