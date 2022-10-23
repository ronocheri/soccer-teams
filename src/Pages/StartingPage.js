
import React, { useState } from 'react';
import ChoosePlayers from '../components/ChoosePlayers';
function StartingPage() {

    const [numOfTeams, setTNumOfTeams] = useState(2);
    const [showMainScreen, setShowMainScreen] = useState(false);
    const [showStartingScreen, setStartingScreen] = useState(true);

    //handle number of teams change 
    function handleChange(event) {
        console.log(event.target.value);
        if(event.target.value>4)
            setTNumOfTeams(4)
        else if(event.target.value<2)
            setTNumOfTeams(2)
        else
            setTNumOfTeams(event.target.value)
      }

      //handle clicking the next button
      function goNext(event) {
        setShowMainScreen(false)
      }

      //handle clicking the start button
    function startClicked(event) {
       setStartingScreen(!showStartingScreen)
      }

    return (
        <div>
            {/* Welcome screen */}
                {showStartingScreen && <div>
                    <h1>Welcome To Teams Creator App!</h1>
                    <p>Please click the button to start!</p>
                    <button onClick={startClicked}>Start </button>
                </div>}
    
            {/* Main screen */}
                {!showStartingScreen && <div>
                    {showMainScreen && <div>
                    <h1>How many teams are particpating in this game?</h1>
                    <input  type="number" pattern="[2-4]*" value={numOfTeams} onInput={handleChange} />

                <br/>
                <button onClick={goNext}>Next</button>
                    </div>}
                    {!showMainScreen && <ChoosePlayers numOfTeams={numOfTeams} />}
            </div>}
        </div>
    )
}

export default StartingPage;

