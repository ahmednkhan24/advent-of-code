import * as day1 from './day1';
import * as day2 from './day2';

describe('2021 days', () => {
  describe('day1', () => {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    it('part1', () => {
      const expected = 7;
      const actual = day1.part1(input);

      expect(actual).toEqual(expected);
    });

    it('part2', () => {
      const expected = 5;
      const actual = day1.part2(input);

      expect(actual).toEqual(expected);
    });
  });

  describe('day2', () => {
    const input = [
      'forward 5',
      'down 5',
      'forward 8',
      'up 3',
      'down 8',
      'forward 2',
    ];

    it('part1', () => {
      const expected = 150;
      const { depth, position } = day2.part1(input);
      const actual = depth * position;

      expect(actual).toEqual(expected);
    });

    it('part2', () => {
      const expected = 900;
      const { depth, position } = day2.part2(input);
      const actual = depth * position;

      expect(actual).toEqual(expected);
    });
  });
});
