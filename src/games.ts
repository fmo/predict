export let games = [
    { 
        "id": 1, 
        "homeTeam": "Fenerbahce", 
        "awayTeam": "Tenerife", 
        "homeTeamGuess": "", 
        "awayTeamGuess": "",
        "gameTime": "19:00"
    },
    { 
        "id": 2, 
        "homeTeam": "Atletico Madrid", 
        "awayTeam": "Barcelona", 
        "homeTeamGuess": "", 
        "awayTeamGuess": "",
        "gameTime": "18:00" 
    },
    { 
        "id": 3, 
        "homeTeam": "Arsenal", 
        "awayTeam": "Liverpool", 
        "homeTeamGuess": "", 
        "awayTeamGuess": "",
        "gameTime": "12:00"
    },
    { 
        "id": 4, 
        "homeTeam": "Sevilla", 
        "awayTeam": "Real Madrid", 
        "homeTeamGuess": "", 
        "awayTeamGuess": "",
        "gameTime": "21:00" 
    },
];

export interface Game {
    id: Number,
    homeTeamGuess: Number,
    awayTeamGuess: Number,
    homeTeam: String,
    awayTeam: String,
    gameTime: String
}