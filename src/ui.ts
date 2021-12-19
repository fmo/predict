import { GameProps } from "./Game";
import { GameService } from "./Services/GameService";
import { util } from "./util";

export class UI {
    gameService: GameService;

    constructor() {
        this.populateGames = this.populateGames.bind(this);
        this.gameService = GameService.gameServiceWithLocalStorage();
    }

    getGameId(gameId: string): number {
        const gameIdArr = gameId.split("-");

        return parseInt(gameIdArr[1]);
    }

    populateGames() {
        let allGames = this.gameService.getAllGames;

        let html = "";

        html += `<div class="game-date">${util.todaysDate()}</div>`;

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

        allGames.forEach(function (game: GameProps) {
            let homeTeamVal =
                game.homeTeamGuess !== null ? game.homeTeamGuess : "";
            let awayTeamVal =
                game.awayTeamGuess !== null ? game.awayTeamGuess : "";

            html += `
                <div id="game-${game.id}" class="game">
                    <div class="teams-label">${game.homeTeam} - ${game.awayTeam}</div>
                    <div class="game-time">${game.gameTime}</div>
                    <div class="score">
                        <input type="text" value="${homeTeamVal}" class="home-team"> 
                        <span> - </span>
                        <input type="text" value="${awayTeamVal}" class="away-team"> 
                    </div>
                </div>
            `;
        });

        document.querySelector(".games").innerHTML = html;
    }

    init() {
        window.addEventListener("load", this.populateGames);
        document
            .querySelector(".games")
            .addEventListener("focusout", (e: any) => {
                const id: number = this.getGameId(
                    e.target.parentNode.parentNode.id
                );
                const guess = e.target.value;

                if (!util.validGuess(guess)) {
                    e.target.classList.add("is-invalid");
                    return;
                }

                if (e.target.classList.contains("home-team")) {
                    this.gameService.predictAndPersist(guess, "home-team", id);
                }

                if (e.target.classList.contains("away-team")) {
                    this.gameService.predictAndPersist(guess, "away-team", id);
                }

                this.populateGames();
            });
    }
}
