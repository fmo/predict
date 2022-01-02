import { util } from './util';

export class GamesUi {
    constructor() {}

    createDateElement() {
        const parentGamesDiv = document.querySelector('.games');
        parentGamesDiv.innerHTML = '';
        const dateDiv = this.createDivWithText('game-date', util.todaysDate());
        parentGamesDiv.insertAdjacentElement('afterbegin', dateDiv);
    }

    createDivWithText(className: string, text: string) {
        const divElement = document.createElement('div');
        divElement.className = className;

        divElement.appendChild(document.createTextNode(text));

        return divElement;
    }
}
