import { util } from './util';
import { GameProps } from './Game';

export class GamesUi {
    constructor() {
        this.createScoreDiv = this.createScoreDiv.bind(this);
    }

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
}
