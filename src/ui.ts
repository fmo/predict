import { games } from './games'

class UI {

    getGameId(gameId: string): number {
        const gameIdArr = gameId.split('-');
        
        return parseInt(gameIdArr[1]);
    }

    populateGames() {
        if (!localStorage.getItem('games')) {
            localStorage.setItem('games', JSON.stringify(games))
        }

        let allGames = JSON.parse(localStorage.getItem('games'));

        let html = '';

        html += '<div class="game-date">24 NOVEMBER 2021</div>'

        allGames.forEach(function(game: any) {
            let homeTeamVal = (game.homeTeamGuess !== null) ? game.homeTeamGuess : '';
            let awayTeamVal = (game.awayTeamGuess !== null) ? game.awayTeamGuess : '';

            html += `
            <div id="game-${game.id}" class="game">
                <div class="teams-label">${game.homeTeam} - ${game.awayTeam}</div>
                <div class="score">
                    <input type="text" value="${homeTeamVal}" class="home-team"> 
                    <span> - </span>
                    <input type="text" value="${awayTeamVal}" class="away-team"> 
                </div>
            </div>`;
        });

        document.querySelector('.games').innerHTML = html;
    }
}

export const ui = new UI();