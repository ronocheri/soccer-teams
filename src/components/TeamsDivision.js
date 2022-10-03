function TeamsDivision(props) {
    
function goBackFunc()
{
    window.location.reload(false);
}

//randomize tamg by ranking
function randomizeTeams()
{
    const teamsResults=[]
    props.teamsList.map((player, index) => (
        teamsResults.push(player)
        ))
}

//teamsList
    return (
      <div>
        <h1>Teams Division</h1>
        <table>
          <tbody>
            <tr>
              {props.teamsList.map((player, index) => (
                <td key={index}>
                  {index + 1}:{" "}
                  {player.fName +
                    " " +
                    player.lName +
                    " Rank:" +
                    player.rank +
                    " Team:" +
                    player.teamId}{" "}
                  {index + 1 < props.teamsList.length ? "|" : ""}{" "}
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <button onClick={goBackFunc}>Go Back</button>
      </div>
    );
}

export default TeamsDivision;
