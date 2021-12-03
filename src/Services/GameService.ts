import { Game } from "../Game";
import { Storage } from "../Storage"

export class GameService {

    private data: Game[]

    constructor(
        public storage: Storage
    ) {
        if (!this.data) {
            this.data = this.getAllGames;
        }
    }

    static gameServiceWithLocalStorage(): GameService {
        return new GameService(
          new Storage
        );
    }

    get getAllGames() {
        return this.storage.getAllGames();
    }

    findOneGameById(id: number): Game {
        let foundGame: Game;

        this.getAllGames.forEach((game: Game) => {
            if (game.id === id) {
                foundGame = game;
            }
        });

        return foundGame;
    }

    predict(guess: number, whichTeam: string, id: number) {
        let updateGame: Game = this.findOneGameById(id);

        if (!updateGame) {
            return;
        }

        let newGameList: Game[] = [];

        this.data.forEach((game: Game) => {
            if (game.id === updateGame.id) {
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

            newGameList.push(game);
        });

        Object.assign(this.data, newGameList);
    }

    persist() {
        this.storage.updateAllGames(this.data);
    }

    predictAndPersist(guess: number, whichTeam: string, id: number) {
        this.predict(guess, whichTeam, id);

        this.persist();
    }
}