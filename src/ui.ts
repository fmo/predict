import { games } from './games'

class UI {

    constructor() {
        this.populateGames = this.populateGames.bind(this);
    }

    getGameId(gameId: string): number {
        const gameIdArr = gameId.split('-');
        
        return parseInt(gameIdArr[1]);
    }

    todaysDate() {
        const date = new Date();
        const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'November', 'Dec'];
        const monthsInString = months[month];

        const fullDate = `${day} / ${monthsInString} / ${year}`;

        return fullDate;
    }
    

    populateGames() {
        if (!localStorage.getItem('games')) {
            localStorage.setItem('games', JSON.stringify(games))
        }

        let allGames = JSON.parse(localStorage.getItem('games'));

        let html = '';

        html += `<div class="game-date">${this.todaysDate()}</div>`

        allGames.forEach(function(game: any) {
            let homeTeamVal = (game.homeTeamGuess !== null) ? game.homeTeamGuess : '';
            let awayTeamVal = (game.awayTeamGuess !== null) ? game.awayTeamGuess : '';

            html += `
                <div id="game-${game.id}" class="game">
                    <div class="teams-label">${game.homeTeam} - ${game.awayTeam}</div>
                    <div class="game-time">${game.gameTime}</div>
                    <div class="score">
                        <input type="text" value="${homeTeamVal}" class="home-team"> 
                        <span> - </span>
                        <input type="text" value="${awayTeamVal}" class="away-team"> 
                    </div>
                </div>
            `;
        });

        document.querySelector('.games').innerHTML = html;
    }
}

export const ui = new UI();