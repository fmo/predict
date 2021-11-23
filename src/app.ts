import { ui } from './ui';
import { storage } from './storage';
import { util } from './util';
import "../style/style.scss"

window.addEventListener('load', ui.populateGames);

document.querySelector('.games').addEventListener('focusout', makeGuess);

function makeGuess(e: any) {
    const id: number = ui.getGameId(e.target.parentNode.parentNode.id);
    const guess = e.target.value;

    if (! util.validGuess(guess)) {
        e.target.classList.add('is-invalid');
        return;
    }

    if (e.target.classList.contains('home-team')) {
        storage.updateGames(guess, 'home-team', id);
    }

    if (e.target.classList.contains('away-team')) {
        storage.updateGames(guess, 'away-team', id);
    }

    ui.populateGames();
}


