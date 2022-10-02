import IPlayer from "./IPlayer";

interface IGame {
    // //players ranking list
    // firstRankPlayers: IPlayer[],
    // secondRankPlayers: IPlayer[],
    // thirdRankPlayers: IPlayer[],
    // forthRankPlayers: IPlayer[],
    // fifthRankPlayers: IPlayer[],

    numOfTeams:number,
    teamsList:IPlayer[],
    date?:Date,
    field?:string
}

export default IGame;