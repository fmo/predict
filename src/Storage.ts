import { games } from './data'
import { GameProps } from './Game';

export class Storage {

    constructor() {
        
    }

    getAllGames(): GameProps[] {
        this.init();
        return JSON.parse(localStorage.getItem('games'));
    }

    updateAllGames(games: GameProps[]) {
        localStorage.setItem('games', JSON.stringify(games));
    }

    init(): void {
        if (!localStorage.getItem('games')) {
            localStorage.setItem('games', JSON.stringify(games))
        }
    }
}
