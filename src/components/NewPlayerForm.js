import { useRef,useEffect, useState } from "react";
import Loading from "./Loading";

function NewPlayerForm(props) {
  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const imageInputRef = useRef();
  const rankInputRef = useRef();
  const [rank, setRank] = useState(1);

  const [isLoading, setIsLoading] = useState(true);
  const [loadedPlayers, setLoadedPlayers] = useState([]);
  const [nextId,setNextId]=useState(0);

  //getting the last id
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://teamscreator-f003c-default-rtdb.firebaseio.com/players.json',
    )
      .then((response) => {
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

        setNextId(players[players.length-1].id+1)

        setIsLoading(false);
        setLoadedPlayers(players);
      });
  }, []);

  if (isLoading) {
    return ( <Loading/>);
  }


  function submitHandler(event) {
    event.preventDefault();

    const fName = fnameInputRef.current.value;
    const lName = lnameInputRef.current.value;
    const imageURL = imageInputRef.current.value;
    const rank=rankInputRef.current.value;

    console.log(nextId)

    const playerData = {
      id: nextId,
      imageURL: "https://fifauteam.com/images/fifa21/cards/small/RegularRareGold.png",
      fName: fName,
      lName: lName,
      rank:rank,
      teamId:0
    };

    props.onAddPlayer(playerData);
    //props.onAddPlayer(props.playersList);
  }

  //limit the rabk to 1-5
  const rankChange = event => {
    if(event.target.value>5)
      setRank(5)
    else if(event.target.value<1)
      setRank(1)
    else       
      setRank(event.target.value)
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
          <input type='text' required id='fname' ref={fnameInputRef} />
          </td>
          </tr>

          <tr>
            <td>
          <label htmlFor='lname'>Last Name</label>
          </td>
          <td>
          <input type='text' required id='lname' ref={lnameInputRef} />
          </td>
          </tr>

          <tr>
            <td>
          <label htmlFor='image'>Image</label>
          </td>
            <td>
          <input type='url'  id='image' ref={imageInputRef} />
          </td>
          </tr>

          <tr>
            <td>
          <label htmlFor='rank'>Rank</label>
          </td>
          <td>
          <input type="number" pattern="[1-5]*"  required id='rank' ref={rankInputRef} value={rank} onChange={rankChange}/>
          </td>
          </tr>
          </tbody>
        </table>
        
        <div >
          <button>Add</button>
        </div>
      </form>
  );
}

export default NewPlayerForm;
