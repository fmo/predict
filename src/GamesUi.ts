import { util } from './util';

export class GamesUi {
    parentGamesDiv: any;

    constructor() {
        this.parentGamesDiv = document.querySelector('.games');
        this.parentGamesDiv.innerHTML = '';
    }

    createDateElement() {
        const dateDiv = this.createDivWithText('game-date', util.todaysDate());
        this.parentGamesDiv.insertAdjacentElement('afterbegin', dateDiv);
    }

    createDivWithText(className: string, text: string) {
        const divElement = document.createElement('div');
        divElement.className = className;

        divElement.appendChild(document.createTextNode(text));

        return divElement;
    }
}
