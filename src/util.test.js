import { util } from './util';

test('should test valid guess', () => {
    expect(util.validGuess('ab')).toEqual(false);
});
