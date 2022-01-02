import { GamesUi } from './GamesUi';

it('should be instance of GamesUi', () => {
    const gamesUi = new GamesUi();
    expect(gamesUi).toBeInstanceOf(GamesUi);
});
