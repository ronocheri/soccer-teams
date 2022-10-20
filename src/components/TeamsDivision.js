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
              
              <h3>Team A</h3>
              <table>
                  <tbody>
              {props.teamsList.sort((p1, p2) => parseFloat(p1.rank) - parseFloat(p2.rank))
              .filter(p=>p.teamId===1).map((player, index)=>(
                
                    <tr key={index}>  
                      <td key={index}>
                        {player.fName+" "+player.lName+"("+player.rank }{") "}
                      </td>
                  </tr>
                 
              ))} 
              </tbody>
            </table>

            <h3>Team B</h3>
              <table>
                 <tbody>
              {props.teamsList.sort((p1, p2) => parseFloat(p1.rank) - parseFloat(p2.rank))
              .filter(p=>p.teamId===2).map((player, index)=>(
                 
                   <tr key={index}>  
                <td key={index}>
                  {player.fName +" " +player.lName+"("+player.rank}{") "}
                </td>
                </tr>
                 
              ))} 
              </tbody>
            </table>

            {props.numOfTeams>=3? 
            <h3>Team C</h3>
            :""}
            {props.numOfTeams>=3? 
            
              <table>
              <tbody>
              {props.teamsList.filter(p=>p.teamId===3).map((player, index)=>(
                  <tr key={index}>  
                <td key={index}>
                  {player.fName+" " +player.lName+"("+player.rank}{") "}
                </td> 
                 </tr>
                
              ))
            }
             </tbody>
               </table>
            :""}

            {props.numOfTeams===4? 
            <h3>Team D</h3>
            :""}

            {props.numOfTeams===4? 
            <table>
              <tbody>
              {props.teamsList.filter(p=>p.teamId===4).map((player, index)=>(
                 <tr key={index}>
                <td key={index}>
                  {player.fName+" "+player.lName+"(" +player.rank}{") "}
                </td>
                </tr>
              ))}
              </tbody>
            </table>
            :""}

          

        <button onClick={goBackFunc}>Go Back</button>
      </div>
    );
}

export default TeamsDivision;
 