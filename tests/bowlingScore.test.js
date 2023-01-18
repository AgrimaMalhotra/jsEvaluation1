const { getGameScore } = require('./bowlingScore.js');
describe('Track Bowling Score', () => {
    describe('Score of each frame', () => {
        it('(open frame)should return score of the game', () => {
            expect(getGameScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
        });
        it('(all strike) should return score of the game', () => {
            expect(getGameScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(300);
        });
        it('(spare) should return score of the game', () => {
            expect(getGameScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(16);
        });
        it('should raise Invalid if number of frames are not 10', () => {
            expect(() => getGameScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toThrow('Invalid');
        });
        it('should raise Invalid array if array is empty', () => {
            expect(() => getGameScore([])).toThrow('Invalid array');
        });
        it('should raise Invalid array if input is not array', () => {
            expect(() => getGameScore('string')).toThrow('Invalid array');
        });
    });
});