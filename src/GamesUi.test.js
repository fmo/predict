import { GamesUi } from './GamesUi';

const gamesUi = new GamesUi();

test('should be instance of GamesUi', () => {
    expect(gamesUi).toBeInstanceOf(GamesUi);
});
