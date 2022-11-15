import { useRef,useEffect, useState } from "react";
import Loading from "./Loading";

function EditPlayerForm(props) {

  const [fName, setFName] = useState(props.player.fName);
  const [lName, setLName] = useState(props.player.lName);
  const [imageURL, setImageURL] = useState(props.player.imageURL);
  const [rank, setRank] = useState(props.player.rank);


  function submitHandler(event) {
    event.preventDefault();

    const playerData = {
      id: props.player.id,
      imageURL: imageURL,
      fName: fName,
      lName: lName,
      rank:parseInt(rank),
      teamId:0
    };

    props.onEdipPlayer(playerData);
    //props.onAddPlayer(props.playersList);
  }

  const fNameChange = event => {
    setFName(event.target.value);
  }

  const lNameChange = event => {
    setLName(event.target.value);
  }

  const imageChange = event => {
    setImageURL(event.target.value);
  }

  const rankChange = event => {
        setRank(event.target.value);
  }

  return (
  
      <form  onSubmit={submitHandler}>
        <table id="addPlayerTbl">
          <tbody>
          <tr>
            <td>
          <label htmlFor='fname'>First Name</label>
          </td>
          <td>
          <input type='text' required id='fname'value={fName} onChange={fNameChange}/>
          </td>
          </tr>

          <tr>
            <td>
          <label htmlFor='lname'>Last Name</label>
          </td>
          <td>
          <input type='text' required id='lname' value={lName} onChange={lNameChange}/>
          </td>
          </tr>

          <tr>
            <td>
          <label htmlFor='image'>Image</label>
          </td>
            <td>
          <input type='url'  id='image' maxLength="500" value={imageURL} onChange={imageChange}/>
          </td>
          </tr>

          <tr>
            <td>
          <label htmlFor='rank'>Rank</label>
          </td>
          <td>
          <input type="number" min="1" max="5" required id='rank'  value={rank} onChange={rankChange}/>
          </td>
          </tr>
          </tbody>
        </table>
        
        <div >
          <button>Submit</button>
        </div>
      </form>
  );
}

export default EditPlayerForm;
