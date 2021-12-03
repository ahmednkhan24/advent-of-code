import { part1, part2 } from './day2';

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
    const { depth, position } = part1(input);
    const actual = depth * position;

    expect(actual).toEqual(expected);
  });

  it('part2', () => {
    const expected = 900;
    const { depth, position } = part2(input);
    const actual = depth * position;

    expect(actual).toEqual(expected);
  });
});
