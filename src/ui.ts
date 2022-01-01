import { GameProps } from './Game';
import { GameService } from './Services/GameService';
import { util } from './util';

export class UI {
    gameService: GameService;

    constructor() {
        this.populateGames = this.populateGames.bind(this);
        this.gameService = GameService.gameServiceWithLocalStorage();
    }

    getGameId(gameId: string): number {
        const gameIdArr = gameId.split('-');

        return parseInt(gameIdArr[1]);
    }

    populateGames() {
        let allGames = this.gameService.getAllGames;

        let dateDiv = document.createElement('div');
        dateDiv.className = 'game-date';

        let dateText = document.createTextNode(util.todaysDate());

        dateDiv.appendChild(dateText);

        let parentGamesDiv = document.querySelector('.games');
        parentGamesDiv.innerHTML = '';
        parentGamesDiv.insertAdjacentElement('afterbegin', dateDiv);

        allGames.forEach(function (game: GameProps) {
            let newGameDiv = document.createElement('div');
            newGameDiv.id = `game-${game.id}`;
            newGameDiv.className = 'game';

            let teamsLabelDiv = document.createElement('div');
            teamsLabelDiv.className = 'teams-label';

            let teamsLabelText = document.createTextNode(
                `${game.homeTeam} - ${game.awayTeam}`
            );

            teamsLabelDiv.appendChild(teamsLabelText);

            newGameDiv.appendChild(teamsLabelDiv);

            let gameTimeDiv = document.createElement('div');
            gameTimeDiv.className = 'game-time';

            let gameTimeText = document.createTextNode(game.gameTime);

            gameTimeDiv.appendChild(gameTimeText);

            newGameDiv.appendChild(gameTimeDiv);

            let scoreDiv = document.createElement('div');
            scoreDiv.className = 'score';

            let homeTeamInput = document.createElement('input');
            homeTeamInput.type = 'text';
            homeTeamInput.value = `${game.homeTeamGuess}`;
            homeTeamInput.className = 'home-team';

            scoreDiv.appendChild(homeTeamInput);

            let spanElement = document.createElement('span');
            let spanText = document.createTextNode(' - ');
            spanElement.appendChild(spanText);

            scoreDiv.appendChild(spanElement);

            let awayTeamInput = document.createElement('input');
            awayTeamInput.type = 'text';
            awayTeamInput.value = `${game.awayTeamGuess}`;
            awayTeamInput.className = 'away-team';

            scoreDiv.appendChild(awayTeamInput);

            newGameDiv.appendChild(scoreDiv);

            parentGamesDiv.insertAdjacentElement('beforeend', newGameDiv);
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
