import { storage } from './storage'

test('Check add game is there', () => {
    expect(storage.addGame).toBeDefined();
});