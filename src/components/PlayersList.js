function PlayersList(props) {
    
    return (
        <div>
            <h1>Players at rank</h1>
            <table>
                <th>Name</th>
                <th>Rank</th>
                {(() => {
            let tr = [];
            for (let i = 1; i <= 5; i++) {
              tr.push(<td key={i}>{i}</td>);
            }
            return td;
          })()}

                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>

            
        </div>
    )
}

export default PlayersList;