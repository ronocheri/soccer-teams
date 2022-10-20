function TeamsDivision(props) {
    
    function goBackFunc()
    {
        window.location.reload(false);
    }
    
    // //Divide into teams lists
    // function randomizeTeams(teamId)
    // {
        
    //     return(
    //     <tr>
    //     {props.teamsList.filter(p=>p.teamId===teamId).map((player, index) => (
    //       <td key={index}>
    //         {index + 1}:{" "}
    //         {player.fName +
    //           " " +
    //           player.lName +
    //           " Rank:" +
    //           player.rank +
    //           " Team:" +
    //           player.teamId}{" "}
    //         {index + 1 < props.teamsList.length ? "|" : ""}{" "}
    //       </td>
    //     ))}
    //   </tr>
    //     )
    // }
    
    // function loopAllTeams()
    // {
    //     for(let i=1;i<=props.numOfTeams;i++)
    //     {
    //         randomizeTeams(i)
    //     }
    // }
    
    
    //teamsList
        return (
          <div>
            <h1>Teams Division</h1>
            <table>
              <tbody>
                <tr>        
                  {props.teamsList.filter(p=>p.teamId===1).map((player, index)=>(
                    <td key={index}>
                      {player.fName+" "+player.lName+"("+player.rank }{") "}
                    </td>
                  ))}
                </tr>
    
                <tr>
                  {props.teamsList.filter(p=>p.teamId===2).map((player, index)=>(
                    <td key={index}>
                      {player.fName +" " +player.lName+"("+player.rank}{") "}
                    </td>
                  ))}
                </tr>
    
                {props.numOfTeams>=3? 
                <tr>
                  {props.teamsList.filter(p=>p.teamId===3).map((player, index)=>(
                    <td key={index}>
                      {player.fName+" " +player.lName+"("+player.rank}{") "}
                    </td> 
                  ))}
                </tr>
                :""}
    
                {props.numOfTeams===4? 
                <tr>
                  {props.teamsList.filter(p=>p.teamId===4).map((player, index)=>(
                    <td key={index}>
                      {player.fName+" "+player.lName+"(" +player.rank}{") "}
                    </td>
                  ))}
                </tr>
                :""}
    
              </tbody>
            </table>
    
            <button onClick={goBackFunc}>Go Back</button>
          </div>
        );
    }
    
    export default TeamsDivision;
    