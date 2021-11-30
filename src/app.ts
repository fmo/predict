import { UI } from './ui';
import { GameService } from './Services/GameService'
import { util } from './util';
import "../style/style.scss"

const gameService = GameService.gameServiceWithLocalStorage();
const ui = new UI();

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
        gameService.predictAndPersist(guess, 'home-team', id);
    }

    if (e.target.classList.contains('away-team')) {
        gameService.predictAndPersist(guess, 'away-team', id);
    }

    ui.populateGames();
}

