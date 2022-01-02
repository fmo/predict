import { ScoreUi } from './ScoreUi';

it('should be object of ScoreUi', () => {
    const scoreUi = new ScoreUi();
    expect(scoreUi).toBeInstanceOf(ScoreUi);
});
