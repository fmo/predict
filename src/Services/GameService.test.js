import { Storage } from "../Storage"
import { GameService } from "./GameService";

jest.mock('../Storage')

beforeEach(() => {
  Storage.mockClear();
});

it('should Storage being called', () => {
  const gameService = new GameService();

  expect(Storage).toHaveBeenCalledTimes(1);
});
