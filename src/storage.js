import { games } from './games';

class Storage{
    constructor(){

    }

    addGame(homeTeam, awayTeam, storageKey = 'games'){
        let allGames = JSON.parse(localStorage.getItem(storageKey));
        let newGame = {};

        newGame.id = allGames.length + 1;
        newGame.homeTeam = homeTeam;
        newGame.awayTeam = awayTeam;
        newGame.homeTeamGuess = "";
        newGame.awayTeamGuess = "";
        
        games.push(newGame);

        localStorage.setItem(storageKey, JSON.stringify(games));
    }
}

export const storage = new Storage();
