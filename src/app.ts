import { games } from './games';
import { ui } from './ui';
import { storage } from './storage';
import "../style/style.scss"

window.addEventListener('load', populateGames);

document.querySelector('.games').addEventListener('focusout', saveTheGuess);

function validGuess(guess: any) {
    const re = /^[0-9]{1,2}$/;

    if (!re.test(guess) || guess > 15) {
        return false;
    }

    if (guess < 0 ) {
        return false;
    }

    return true;
}

function saveTheGuess(e: any) {
    const id: number = ui.getGameId(e.target.parentNode.parentNode.id);
    const guess = e.target.value;

    if (! validGuess(guess)) {
        e.target.classList.add('is-invalid');
        return;
    }

    if (e.target.classList.contains('home-team')){
        storage.updateGames(guess, 'home-team', id);
    }

    if (e.target.classList.contains('away-team')){
        storage.updateGames(guess, 'away-team', id);
    }

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
