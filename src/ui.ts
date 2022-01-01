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

        let html = '';

        html += `<div class="game-date">${util.todaysDate()}</div>`;

        allGames.forEach(function (game: GameProps) {
            html += `
                <div id="game-${game.id}" class="game">
                    <div class="teams-label">${game.homeTeam} - ${game.awayTeam}</div>
                    <div class="game-time">${game.gameTime}</div>
                    <div class="score">
                        <input type="text" value="${game.homeTeamGuess}" class="home-team"> 
                        <span> - </span>
                        <input type="text" value="${game.awayTeamGuess}" class="away-team"> 
                    </div>
                </div>
            `;
        });

        document.querySelector('.games').innerHTML = html;
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
