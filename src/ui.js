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
            <div id="game-${game.id}" class="form-group fs-2 justify-content-center row mt-2 align-items-center shadow p-3 mb-5 bg-body rounded">
                <div class="col-4 text-end">${game.homeTeam}</div>
                <div class="input-group input-group-sm w-25">
                    <input type="text" value="${homeTeamVal}" class="form-control home-team"> 
                    <input type="text" value="${awayTeamVal}" class="form-control away-team"> 
                </div>
                <div class="col-4 text-start">${game.awayTeam}</div>
            </div>`;
        });

        return html;
    }
}

export const ui = new UI();