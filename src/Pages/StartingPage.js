
import React, { useState } from 'react';
import ChoosePlayers from '../components/ChoosePlayers';
function StartingPage() {

    const [numOfTeams, setTNumOfTeams] = useState(2);
    const [showMainScreen, setShowMainScreen] = useState(false);
    const [showTeammsScreen, setShowTeammsScreen] = useState(false);
    const [showStartingScreen, setStartingScreen] = useState(true);

    //handle number of teams change 
    function handleChange(event) {
        // console.log(event.target.value);
        // if(event.target.value>4)
        //     setTNumOfTeams(4)
        // else if(event.target.value<2)
        //     setTNumOfTeams(2)
        // else
            setTNumOfTeams(event.target.value)            
      }

      //handle clicking the next button
      function goNext(event) {
        if(numOfTeams<2 || numOfTeams>4)
        {
            alert("You must choose between 2-4 teams")
            return;
        }
    
        setShowMainScreen(true)
        setShowTeammsScreen(false)
      }

      //handle clicking the start button
    function startClicked(event) {
        setShowTeammsScreen(true)
       setStartingScreen(false)
      }

    //handle clicking the cancel button
    function cancelClicked()
    {
        window.location.reload(false);
    }
    //   function cancelClicked(event) {
    //     setStartingScreen(true)
    //     setShowTeammsScreen(false)
    //     setShowMainScreen(false)
    //   }

    return (
        <div>
            {/* Welcome screen */}
                {showStartingScreen && <div>
                    <h1>Welcome To Teams Creator App!</h1>
                    <p>Please click the button to start!</p>
                    <button onClick={startClicked}>Start </button>
                </div>}
    
            {/* Teams choose screen */}
                {showTeammsScreen && 
                <div>
                    <div>
                        <h1>How many teams are particpating in this game?</h1>
                        <input  type="number"  min="2" max="4" value={numOfTeams} onInput={handleChange} />

                        <br/>
                        <button onClick={goNext}>Next</button> <br/>
                        <button onClick={cancelClicked}>Cancel</button>
                    </div>
                 </div>}
                 {/* Main screen */}
                 {showMainScreen && <div>
                    <ChoosePlayers numOfTeams={numOfTeams} /> 
                    <br/>
                    <button onClick={cancelClicked}>Main Menu</button>
                 </div>}
            
        </div>
    )
}

export default StartingPage;

