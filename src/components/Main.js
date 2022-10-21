
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AddPlayerPage from '../Pages/AddPlayerPage';
import StartingPage from "../Pages/StartingPage";

function Main() {
    const [showStartingPage, setShowStartingPage] = useState(false);
    // const [showAddPlayerPage, setShowAddPlayerPage] = useState(false);

function handleClick()
{
    console.log("Clicked")
    setShowStartingPage(true)
    // setShowAddPlayerPage(false)
}

// function handleClick2()
// {
//     console.log("Clicked")
//     setShowAddPlayerPage(true)
//     setShowStartingPage(false)
// }

    return (
        <div>
            {!showStartingPage && <div>
                <h1>Welcome To Teams Creator App!</h1>
                <p>Please click the button to start!</p>
                <button onClick={handleClick}>Start </button>
                {/* <button onClick={handleClick2}>Add player </button> */}
            </div>}
            {showStartingPage && <div>
                <StartingPage />
            </div>}

            {/* {showAddPlayerPage && <div>
                <AddPlayerPage />
            </div>} */}

        </div>
    )
}

export default Main;

