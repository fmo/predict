import { games } from './games';
import { ui } from './ui';
import { storage } from './storage';
import "bootstrap/dist/css/bootstrap.min.css";

window.addEventListener('load', populateGames);

document.getElementById('add-game').style.display = 'none';

document.querySelector('.games').addEventListener('focusout', getTheGuess);

document.getElementById('add-new-game-parent').addEventListener('click', function(e){
    if (e.target.classList.contains('add-game-btn')) {
        document.getElementById('add-game').style.display = 'block';
        ui.createButton('Back To The Game!', 'btn btn-primary cancel-add-game');
        document.querySelector('.add-game-btn').remove();
        return;
    }

    if (e.target.classList.contains('cancel-add-game')) {
        document.getElementById('add-game').style.display = 'none';
        ui.createButton('Add A Game!', 'btn btn-primary add-game-btn');
        document.querySelector('.cancel-add-game').remove();
        return;
    }

    if (e.target.classList.contains('submit-new-game')){

        // TODO Check if the data is there. 

        const newGameHomeTeam = document.querySelector('.new-home-team');
        const newGameAwayTeam = document.querySelector('.new-away-team');

        storage.addGame(newGameHomeTeam.value, newGameAwayTeam.value);

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

        newGameHomeTeam.value = '';
        newGameAwayTeam.value = '';

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

function populateGames() {
    if (!localStorage.getItem('games')) {
        localStorage.setItem('games', JSON.stringify(games))
    } else {
        games = JSON.parse(localStorage.getItem('games'));
    }

    let html = ui.populateGames(games);

    document.querySelector('.games').innerHTML = html;
}
