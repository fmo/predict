import { util } from '../util';
import { GameProps } from '../Game';
import { ScoreUi } from './ScoreUi';

export class GamesUi {
    scoreUiService = new ScoreUi();

    constructor() {}

    createDateElement() {
        const parentGamesDiv = document.querySelector('.games');
        parentGamesDiv.innerHTML = '';
        const dateDiv = this.createDivWithText('game-date', util.todaysDate());
        parentGamesDiv.insertAdjacentElement('afterbegin', dateDiv);
    }

    createDivWithText(className: string, text: string) {
        const divElement = document.createElement('div');
        divElement.className = className;

        divElement.appendChild(document.createTextNode(text));

        return divElement;
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

        const scoreDiv = this.scoreUiService.createScoreDiv(
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
}
