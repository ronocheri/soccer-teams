
import React, { useState } from 'react';
import ChoosePlayers from '../components/ChoosePlayers';
function StartingPage() {

    const [numOfTeams, setTNumOfTeams] = useState(2);
    const [showMainScreen, setShowMainScreen] = useState(true);

    function handleChange(event) {
        console.log(event.target.value);
        if(event.target.value>4)
            setTNumOfTeams(4)
        else if(event.target.value<2)
            setTNumOfTeams(2)
        else
            setTNumOfTeams(event.target.value)
      }

      function goNext(event) {
        setShowMainScreen(false)
      }

    return (
        <div>
        {showMainScreen && <div>
           <h1>How many teams are particpating in this game?</h1>
           <input type="number" pattern="[2-4]*"
     value={numOfTeams} onInput={handleChange} />

     <br/>
     <button onClick={goNext}>Next</button>
        </div>}
        {!showMainScreen && <ChoosePlayers numOfTeams={numOfTeams} />}
        </div>
    )
}

export default StartingPage;

