import { GamesUi } from './GamesUi';

test('should be instance of GamesUi', () => {
    const gamesUi = new GamesUi();
    expect(gamesUi).toBeInstanceOf(GamesUi);
});
