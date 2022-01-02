import { GameProps } from './Game';
import { GamesUi } from './GamesUi';
import { GameService } from './Services/GameService';
import { util } from './util';

export class UI {
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

    createDivWithText(className: string, text: string) {
        const divElement = document.createElement('div');
        divElement.className = className;

        divElement.appendChild(document.createTextNode(text));

        return divElement;
    }

    createTeamInput(guess: string, team: string) {
        let homeTeamInput = document.createElement('input');
        homeTeamInput.type = 'text';
        homeTeamInput.value = guess;
        homeTeamInput.className = team;

        return homeTeamInput;
    }

    createScoreDiv(homeTeamGuess: string, awayTeamGuess: string) {
        let scoreDiv = document.createElement('div');
        scoreDiv.className = 'score';

        const homeTeamInput = this.createTeamInput(homeTeamGuess, 'home-team');
        scoreDiv.appendChild(homeTeamInput);

        let spanElement = document.createElement('span');
        let spanText = document.createTextNode(' - ');
        spanElement.appendChild(spanText);

        scoreDiv.appendChild(spanElement);

        const awayTeamInput = this.createTeamInput(awayTeamGuess, 'away-team');
        scoreDiv.appendChild(awayTeamInput);

        return scoreDiv;
    }

    createNewGame(game: GameProps) {
        let newGameDiv = document.createElement('div');
        newGameDiv.id = `game-${game.id}`;
        newGameDiv.className = 'game';

        const teamsLabel = this.createDivWithText(
            'teams-label',
            `${game.homeTeam} - ${game.awayTeam}`
        );

        const gameTime = this.createDivWithText('game-time', game.gameTime);

        const scoreDiv = this.createScoreDiv(
            `${game.homeTeamGuess}`,
            `${game.awayTeamGuess}`
        );

        newGameDiv.appendChild(teamsLabel);
        newGameDiv.appendChild(gameTime);
        newGameDiv.appendChild(scoreDiv);

        return newGameDiv;
    }

    generateGames(newGame: any) {
        const parentGamesDiv = document.querySelector('.games');
        parentGamesDiv.insertAdjacentElement('beforeend', newGame);
    }

    populateGames() {
        const allGames = this.gameService.getAllGames;

        this.gamesUi.createDateElement();

        allGames.forEach((game: GameProps) => {
            const newGame = this.createNewGame(game);
            this.generateGames(newGame);
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
