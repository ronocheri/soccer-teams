function TeamsDivision(props) {
    
function goBackFunc()
{
    window.location.reload(false);
}

//teamsList
    return (
        <div>
            <h1>Teams Division</h1>
            <table>
                <tbody>
                    <tr>
                        {
                            props.teamsList.map((player, index) => (
                            <td key={index}>{index+1}: {player.fName+" "+player.lName} {index+1<props.teamsList.length?'|':''} </td>
                            ))
                        }
                    </tr>
                </tbody>
            </table>

            <button onClick={goBackFunc}>Go Back</button>
        </div>
    )
}

export default TeamsDivision;
