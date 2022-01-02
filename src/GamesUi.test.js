import { GamesUi } from './GamesUi';

gamesUi: () => {
    return new GamesUi();
};

test('should be instance of GamesUi', () => {
    expect(this.gamesUi).toBeInstanceOf(GamesUi);
});
