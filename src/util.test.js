import { util } from './util';

test('Test Valid Guess', () => {
  expect(util.validGuess('ab')).toEqual(false);
});