export class ScoreUi {
    createScoreDiv(homeTeamGuess: string, awayTeamGuess: string) {
        const homeTeamInput = this.createTeamInput(homeTeamGuess, 'home-team');
        const seperator = this.createSeperator();
        const awayTeamInput = this.createTeamInput(awayTeamGuess, 'away-team');

        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'score';
        scoreDiv.appendChild(homeTeamInput);
        scoreDiv.appendChild(seperator);
        scoreDiv.appendChild(awayTeamInput);

        return scoreDiv;
    }

    createTeamInput(guess: string, team: string) {
        const teamInput = document.createElement('input');
        teamInput.type = 'text';
        teamInput.value = guess;
        teamInput.className = team;

        return teamInput;
    }

    createSeperator() {
        const seperatorElement = document.createElement('span');
        const seperatorText = document.createTextNode(' - ');
        seperatorElement.appendChild(seperatorText);

        return seperatorElement;
    }
}
