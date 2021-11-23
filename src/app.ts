import { games } from './games';
import { ui } from './ui';
import "../style/style.scss"

window.addEventListener('load', populateGames);

document.querySelector('.games').addEventListener('focusout', saveTheGuess);

function validGuess(guess: any) {
    if (guess < 0 ) {
        return false;
    }

    const re = /^[0-9]{1,2}$/;

    if (!re.test(guess) || guess > 15) {
        return false;
    }

    return true;
}

function updateGames(guess: any, whichTeam: any, id: any) {
    let guessedGames: any = [];
    
    let allGames = JSON.parse(localStorage.getItem('games'));

    allGames.forEach(function(game: any) {
        if (game.id === id) {
            if (whichTeam === 'home-team') {
                game = { 
                    ...game, 
                    "homeTeamGuess": guess, 
                }
            } else {
                game = { 
                    ...game, 
                    "awayTeamGuess": guess, 
                }
            }
        }
        
        guessedGames.push(game);
    });

    return guessedGames;
}


function saveTheGuess(e: any) {
    const id: number = ui.getGameId(e.target.parentNode.parentNode.id);
    const guess = e.target.value;

    if (!validGuess(guess)) {
        e.target.classList.add('is-invalid');
        return;
    }

    let guessedGames = [];

    if (e.target.classList.contains('home-team')){
        guessedGames = updateGames(guess, 'home-team', id);
    }

    if (e.target.classList.contains('away-team')){
        guessedGames = updateGames(guess, 'away-team', id);
    }

    localStorage.setItem('games', JSON.stringify(guessedGames));

    populateGames();
}

function populateGames() {
    if (!localStorage.getItem('games')) {
        localStorage.setItem('games', JSON.stringify(games))
    }

    let allGames = JSON.parse(localStorage.getItem('games'));

    let html = ui.populateGames(allGames);

    document.querySelector('.games').innerHTML = html;
}
