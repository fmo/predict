import { Game } from "../Game";
import { Storage } from "../Storage"

export class GameService {

    constructor(public storage: Storage) {}

    static gameServiceWithLocalStorage(): GameService {
        return new GameService(
          new Storage
        );
      }

    getAllGames() {
        return this.storage.getAllGames();
    }

    findOneGameById(id: number): Game|void {
        let foundGame: Game|void;

        this.getAllGames().forEach((game: Game) => {
            if (game.id === id) {
                foundGame = game;
            }
        });

        return foundGame;
    }

    update(updateGame: Game): Game [] {
        let updatedGameList: Game [] = [];

        this.getAllGames().forEach((game: Game) => {
            if (game.id === updateGame.id) {
                updatedGameList.push(updateGame);
            } else {
                updatedGameList.push(game);
            }
        });

        return updatedGameList;
    }

    predict(guess: number, whichTeam: string, id: number): Game {
        let game = this.findOneGameById(id);

        if (!game) {
            return;
        }

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
    
        return game;
    }

    persist(games: Game []) {
        this.storage.updateAllGames(games);
    }

    predictAndPersist(guess: number, whichTeam: string, id: number) {
        let game = this.predict(guess, whichTeam, id);
        let games = this.update(game);

        this.persist(games);
    }
}