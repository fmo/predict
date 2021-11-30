import { games } from './data'
import { Game } from './Game';

export class Storage {

    getAllGames(): [] {
        this.init();
        return JSON.parse(localStorage.getItem('games'));
    }

    updateAllGames(games: Game []) {
        localStorage.setItem('games', JSON.stringify(games));
    }

    init(): void {
        if (!localStorage.getItem('games')) {
            localStorage.setItem('games', JSON.stringify(games))
        }
    }
}
