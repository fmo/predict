import { UI } from "./ui";

jest.mock('./Services/GameService');

test('should get game id', () => {
    const gameService = require('./Services/GameService');
    const ui = new UI;

    expect(ui.getGameId('id-5')).toBe(5);
});
