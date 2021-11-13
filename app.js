import "bootstrap/dist/css/bootstrap.min.css";

let games = [
    { "id": 1, "homeTeam": "Fenerbahce", "awayTeam": "Galatasaray", "homeTeamGuess": "", "awayTeamGuess": "" },
    { "id": 2, "homeTeam": "Besiktas", "awayTeam": "Trabzonspor", "homeTeamGuess": "", "awayTeamGuess": "" },
];

window.addEventListener('load', populateGames);

document.getElementById('add-game').style.display = 'none';

document.querySelector('.games').addEventListener('focusout', getTheGuess);

document.getElementById('add-new-game-parent').addEventListener('click', function(e){
    if (e.target.classList.contains('add-game-btn')) {
        document.getElementById('add-game').style.display = 'block';
        document.querySelector('.add-game-btn').value = 'Back To Game!';
        document.querySelector('.add-game-btn').classList.add('cancel-add-game');
        document.querySelector('.cancel-add-game').classList.remove('add-game-btn');
        return;
    }

    if (e.target.classList.contains('cancel-add-game')) {
        document.getElementById('add-game').style.display = 'none';
        document.querySelector('.cancel-add-game').value = 'Add A Game!';
        document.querySelector('.cancel-add-game').classList.add('add-game-btn');
        document.querySelector('.add-game-btn').classList.remove('cancel-add-game');
        return;
    }

    if (e.target.classList.contains('submit-new-game')){

        let allGames = JSON.parse(localStorage.getItem('games'));
        let newGame = {};

        newGame.id = allGames.length + 1;
        newGame.homeTeam = document.querySelector('.new-home-team').value;
        newGame.awayTeam = document.querySelector('.new-away-team').value;
        newGame.homeTeamGuess = "";
        newGame.awayTeamGuess = "";
        
        games.push(newGame);

        localStorage.setItem('games', JSON.stringify(games));

        const successDiv = document.createElement('div');
        successDiv.className = "alert alert-success mt-2";
        successDiv.appendChild(document.createTextNode("New game has been added"));
        const container = document.getElementById('add-new-game-parent');
        const form = document.getElementById('add-game');
        container.insertBefore(successDiv, form);

        setTimeout(() => {
            const currentAlert = document.querySelector('.alert');
            if(currentAlert) {
                currentAlert.remove();
            }
        }, 3000);

        document.querySelector('.new-home-team').value = '';
        document.querySelector('.new-away-team').value = '';

        populateGames();

        return;
    }
});


function getTheGuess(e){
    let homeTeamGuess, awayTeamGuess;

    let guessedGames = [];

    if(e.target.classList.contains('home-team')){
        const gameId = e.target.parentNode.parentNode.id;
        const gameIdArr = gameId.split('-');
        const id = parseInt(gameIdArr[1]);

        homeTeamGuess = e.target.value;

        if (homeTeamGuess < 0 ) {
            e.target.classList.add('is-invalid');
            return;
        }

        const re = /^[0-9]{1,2}$/;

        if (!re.test(homeTeamGuess) || homeTeamGuess > 15) {
            e.target.classList.add('is-invalid');
            return;
        }
        
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

        if (awayTeamGuess < 0) {
            e.target.classList.add('is-invalid');
            return;
        }

        const re = /^[0-9]{1,2}$/;

        if (!re.test(awayTeamGuess) || awayTeamGuess > 15) {
            e.target.classList.add('is-invalid');
            return;
        }

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

    localStorage.setItem('games', JSON.stringify(guessedGames));

    populateGames();
}

function populateGames(){

    if (!localStorage.getItem('games')) {
        localStorage.setItem('games', JSON.stringify(games))
    } else {
        games = JSON.parse(localStorage.getItem('games'));
    }

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

    document.querySelector('.games').innerHTML = html;
}
