import { Storage } from './Storage'

test('Check add game is there', () => {
    const storage = new Storage;
    expect(storage.getAllGames()).toBeDefined();
});