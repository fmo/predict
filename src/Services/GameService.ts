import { Game, GameProps } from '../Game';
import { Storage } from '../Storage';

export class GameService {
    private data: GameProps[];

    constructor(public storage: Storage) {
        if (!this.data) {
            this.data = this.getAllGames;
        }
    }

    static gameServiceWithLocalStorage(): GameService {
        return new GameService(new Storage());
    }

    get getAllGames() {
        const allGames = this.storage.getAllGames();

        allGames.sort((game1: any, game2: any) => {
            let gameTime1 = parseInt(game1.gameTime);
            let gameTime2 = parseInt(game2.gameTime);

            if (gameTime1 < gameTime2) {
                return -1;
            }

            if (gameTime1 > gameTime2) {
                return 1;
            }

            return 0;
        });

        return allGames;
    }

    findOneGameById(id: number): GameProps {
        let foundGame: GameProps;

        this.getAllGames.forEach((game: GameProps) => {
            if (game.id === id) {
                foundGame = game;
            }
        });

        return foundGame;
    }

    predict(guess: number, whichTeam: string, id: number) {
        let updateGame: GameProps = this.findOneGameById(id);

        if (!updateGame) {
            return;
        }

        let newGameList: GameProps[] = [];

        this.data.forEach((game: GameProps) => {
            if (game.id === updateGame.id) {
                if (whichTeam === 'home-team') {
                    game = {
                        ...game,
                        homeTeamGuess: guess,
                    };
                } else {
                    game = {
                        ...game,
                        awayTeamGuess: guess,
                    };
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
