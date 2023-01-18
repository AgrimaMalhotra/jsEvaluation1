const { bestScore } = require('../bowlingScore');
describe('Track Bowling Score', () => {
  describe('Best score of all games played', () => {
    it('should return Invalid array if any array entry is empty', () => {
      expect(() => bestScore([[], [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]])).toThrow('Invalid array');
    });
    it('should return Invalid array if any game entry is invalid type', () => {
      expect(() => bestScore(['string', [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]])).toThrow('Invalid array');
    });
    it('should return best score of the game', () => {
      expect(bestScore([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]])).toBe(90);
    });
  });
});