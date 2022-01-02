const createTeamInput = (guess: string, team: string) => {
    const teamInput = document.createElement('input');
    teamInput.type = 'text';
    teamInput.value = guess;
    teamInput.className = team;

    return teamInput;
};

const createSeperator = () => {
    const seperatorElement = document.createElement('span');
    const seperatorText = document.createTextNode(' - ');
    seperatorElement.appendChild(seperatorText);

    return seperatorElement;
};

const CreateScoreDiv = (homeTeamGuess: string, awayTeamGuess: string) => {
    const homeTeamInput = createTeamInput(homeTeamGuess, 'home-team');
    const seperator = createSeperator();
    const awayTeamInput = createTeamInput(awayTeamGuess, 'away-team');

    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'score';
    scoreDiv.appendChild(homeTeamInput);
    scoreDiv.appendChild(seperator);
    scoreDiv.appendChild(awayTeamInput);

    return scoreDiv;
};

export default CreateScoreDiv;
