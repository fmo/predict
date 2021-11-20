class UI{
    constructor(){

    }

    getGameId(gameId) {
        const gameIdArr = gameId.split('-');
        
        return parseInt(gameIdArr[1]);
    }

    createButton(val, className){
        let input = document.createElement('input');
        input.type = 'button';
        input.value = val;
        input.className = className;

        const container = document.getElementById('add-new-game-parent');
        const form = document.getElementById('add-game');
        container.insertBefore(input, form);
    }

    populateGames(games){
        let html = '';

        games.forEach(function(game){

            let homeTeamVal = (game.homeTeamGuess !== null) ? game.homeTeamGuess : '';
            let awayTeamVal = (game.awayTeamGuess !== null) ? game.awayTeamGuess : '';

            html += `
            <div id="game-${game.id}" class="game">
                <div class="teams-label">${game.homeTeam} - ${game.awayTeam}</div>
                <div class="score">
                    <input type="text" value="${homeTeamVal}" class="home-team"> 
                    <span> - </span>
                    <input type="text" value="${awayTeamVal}" class="away-team"> 
                </div>
            </div>`;
        });

        return html;
    }
}

export const ui = new UI();