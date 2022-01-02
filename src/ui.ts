import { GameProps } from './Game';
import { GamesUi } from './GamesUi';
import { GameService } from './Services/GameService';
import { util } from './util';

export class Ui {
    gameService: GameService;
    gamesUi = new GamesUi();

    constructor() {
        this.populateGames = this.populateGames.bind(this);
        this.gameService = GameService.gameServiceWithLocalStorage();
    }

    getGameId(gameId: string): number {
        const gameIdArr = gameId.split('-');

        return parseInt(gameIdArr[1]);
    }

    populateGames() {
        const allGames = this.gameService.getAllGames;

        this.gamesUi.createDateElement();

        allGames.forEach((game: GameProps) => {
            const newGame = this.gamesUi.createNewGame(game);
            this.gamesUi.generateGames(newGame);
        });
    }

    init() {
        window.addEventListener('load', this.populateGames);
        document
            .querySelector('.games')
            .addEventListener('focusout', (e: any) => {
                const id: number = this.getGameId(
                    e.target.parentNode.parentNode.id
                );
                const guess = e.target.value;

                if (!util.validGuess(guess)) {
                    e.target.classList.add('is-invalid');
                    return;
                }

                if (e.target.classList.contains('home-team')) {
                    this.gameService.predictAndPersist(guess, 'home-team', id);
                }

                if (e.target.classList.contains('away-team')) {
                    this.gameService.predictAndPersist(guess, 'away-team', id);
                }

                this.populateGames();
            });
    }
}
