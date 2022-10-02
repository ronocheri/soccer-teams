
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import StartingPage from "../Pages/StartingPage";

function Main() {
    const [showStartingPage, setShowStartingPage] = useState(false);

function handleClick()
{
    console.log("Clicked")
    setShowStartingPage(true)
}

    return (
        <div>
            {!showStartingPage && <div>
                <h1>Welcome To Teams Creator App!</h1>
                <p>Please click the button to start!</p>
                <button onClick={handleClick}>Start   
                    {/* <Link to='/createTeams'>Start</Link> */}
                </button>
            </div>}
            {showStartingPage && <div>
                <StartingPage />
            </div>}
        </div>
    )
}

export default Main;

