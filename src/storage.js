import { games } from './games';

class Storage{
    constructor(){

    }

    addGame(homeTeam, awayTeam){
        let allGames = JSON.parse(localStorage.getItem('games'));
        let newGame = {};

        newGame.id = allGames.length + 1;
        newGame.homeTeam = homeTeam;
        newGame.awayTeam = awayTeam;
        newGame.homeTeamGuess = "";
        newGame.awayTeamGuess = "";
        
        games.push(newGame);

        localStorage.setItem('games', JSON.stringify(games));
    }
}

export const storage = new Storage();