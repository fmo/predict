import { games } from '../data';
import { Storage } from '../Storage';
import { GameService } from './GameService';

beforeEach(() => {
    localStorage.clear();

    jest.clearAllMocks();

    localStorage.setItem.mockClear();
});

it('should storage being called', () => {
    const storage = new Storage();

    const storageMock = jest
        .spyOn(storage, 'getAllGames')
        .mockImplementation(() => {
            return games;
        });

    const gameService = new GameService(storage);

    expect(storageMock).toHaveBeenCalledTimes(1);
});

it('should return all games', () => {
    const storage = new Storage();

    const storageMock = jest
        .spyOn(storage, 'getAllGames')
        .mockReturnValue(games);

    const gameService = new GameService(storage);

    expect(storage.getAllGames()).toBe(gameService.getAllGames);
});

it('should find one game by id', () => {
    const storage = new Storage();

    const storageMock = jest
        .spyOn(storage, 'getAllGames')
        .mockReturnValue(games);

    const gameService = new GameService(storage);

    const firstGame = gameService.findOneGameById(1);

    expect(firstGame.awayTeam).toBe('Lazio');
});

it('should predict home team', () => {
    const storage = new Storage();

    const storageMock = jest
        .spyOn(storage, 'getAllGames')
        .mockReturnValue(games);

    const gameService = new GameService(storage);

    gameService.predict(2, 'home-team', 1);
});

it('should predict away team', () => {
    const storage = new Storage();

    const storageMock = jest
        .spyOn(storage, 'getAllGames')
        .mockReturnValue(games);

    const gameService = new GameService(storage);

    gameService.predict(2, 'away-team', 1);
});
