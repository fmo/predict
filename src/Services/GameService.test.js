import { Storage } from "../Storage"
import { GameService } from "./GameService";

jest.mock('../Storage')

beforeEach(() => {
  Storage.mockClear();
});

it('should Storage being called', () => {
  const gameService = new GameService(new Storage());

  expect(Storage).toHaveBeenCalledTimes(1);

  const mockStorageInstance = Storage.mock.instances[0];
  const mockGetAllGames = mockStorageInstance.getAllGames;

  expect(mockGetAllGames).toHaveBeenCalledTimes(1);
});
