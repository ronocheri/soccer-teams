import { useNavigate, useRoutes } from "react-router-dom";
import NewPlayerForm from "../components/NewPlayerForm";
import PlayerDetails from "../components/PlayerDetails";
import {useLocation} from 'react-router-dom';
import EditPlayerForm from "../components/EditPlayerForm";

function EditPlayerPage() {
  const { state } = useLocation();
  console.log(state.player);

    function EditPlayerPageHandler(player) {
        fetch(
          'https://teamscreator-f003c-default-rtdb.firebaseio.com/players/-NFCaj8I0vQEju3cPPC1',
          {
            method: 'PUT',
            body: JSON.stringify(player),
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
            },
          }
        ).then(() => {
          console.log("OK!") 
        });

    }
      return (
        <section>
          <h1>Edit Player Details</h1>
          <EditPlayerForm player={state.player} onEdipPlayer={EditPlayerPageHandler}/>
        </section>
      );
    }

export default EditPlayerPage;

