let games = [
    { "id": 1, "homeTeam": "Fenerbahce", "awayTeam": "Galatasaray", "homeTeamGuess": "", "awayTeamGuess": "" },
    { "id": 2, "homeTeam": "Besiktas", "awayTeam": "Trabzonspor", "homeTeamGuess": "", "awayTeamGuess": "" },
];

window.addEventListener('load', populateGames);

document.querySelector('.games').addEventListener('focusout', getTheGuess);

document.querySelector('.btn').addEventListener('click', guess);

function guess(e){
    

    e.preventDefault();
}


function getTheGuess(e){
    let homeTeamGuess, awayTeamGuess, gamess;

    let guessedGames = [];

    if(e.target.classList.contains('home-team')){
        const gameId = e.target.parentNode.parentNode.id;
        const gameIdArr = gameId.split('-');
        const id = parseInt(gameIdArr[1]);

        homeTeamGuess = e.target.value;

        
        games.forEach(function(game) {
            if (game.id === id) {
                game = { 
                    ...game, 
                    "homeTeamGuess": homeTeamGuess, 
                }
            }

            guessedGames.push(game);
        });
    }

    if(e.target.classList.contains('away-team')){
        const gameId = e.target.parentNode.parentNode.id;
        const gameIdArr = gameId.split('-');
        const id = parseInt(gameIdArr[1]);

        awayTeamGuess = e.target.value;

        games.forEach(function(game) {
            if (game.id === id) {
                game = { 
                    ...game, 
                    "awayTeamGuess": awayTeamGuess, 
                }
            }

            guessedGames.push(game);
        });
    }

    games = guessedGames;

    console.log(games);
}

function populateGames(){

    if (!localStorage.getItem('games')) {
        localStorage.setItem('games', JSON.stringify(games))
    } else {
        games = JSON.parse(localStorage.getItem('games'));
    }

    let html = '';

    games.forEach(function(game){
        html += `
        <div id="game-${game.id}" class="form-group fs-2 justify-content-center row mt-2 align-items-center shadow p-3 mb-5 bg-body rounded">
            <div class="col-4 text-end">${game.homeTeam}</div>
            <div class="col-1">
                <input type="text" class="form-control form-control-sm w-50 home-team"> 
            </div>
            <div class="col-1">
                <input type="text" class="form-control form-control-sm w-50 away-team"> 
            </div>
            <div class="col-4 text-start">${game.awayTeam}</div>
        </div>`;
    });

    document.querySelector('.games').innerHTML = html;
}
