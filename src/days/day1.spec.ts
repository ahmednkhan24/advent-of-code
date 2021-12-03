import { part1, part2 } from './day1';

describe('day1', () => {
  const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

  it('part1', () => {
    const expected = 7;
    const actual = part1(input);

    expect(actual).toEqual(expected);
  });

  it('part2', () => {
    const expected = 5;
    const actual = part2(input);

    expect(actual).toEqual(expected);
  });
});
