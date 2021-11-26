import { Game } from './games';

class Storage {

    updateGames(guess: number, whichTeam: string, id: number): void {
        
        let guessedGames: any = [];
        
        let allGames = JSON.parse(localStorage.getItem('games'));

        allGames.forEach((game: Game) => {
            if (game.id === id) {
                if (whichTeam === 'home-team') {
                    game = { 
                        ...game, 
                        "homeTeamGuess": guess, 
                    }
                } else {
                    game = { 
                        ...game, 
                        "awayTeamGuess": guess, 
                    }
                }
            }
            
            guessedGames.push(game);
        });
    
        localStorage.setItem('games', JSON.stringify(guessedGames));
    }
}

export const storage = new Storage();
