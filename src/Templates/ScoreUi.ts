export class ScoreUi {
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

    createTeamInput(guess: string, team: string) {
        let homeTeamInput = document.createElement('input');
        homeTeamInput.type = 'text';
        homeTeamInput.value = guess;
        homeTeamInput.className = team;

        return homeTeamInput;
    }
}
