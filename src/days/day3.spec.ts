import {
  part1,
  part2,
  swapRowsAndColumnsOfStringArray,
  mostOftenChar,
} from './day3';

describe('day3', () => {
  const input = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ];

  it('part1', () => {
    const expected = {
      binaryGammaRate: '10110',
      decimalGammaRate: 22,
      binaryEpsilonRate: '01001',
      decimalEpsilonRate: 9,
      powerConsumption: 198,
    };

    const actual = part1(input);

    expect(actual.binaryEpsilonRate).toEqual(expected.binaryEpsilonRate);
    expect(actual.decimalEpsilonRate).toEqual(expected.decimalEpsilonRate);
    expect(actual.binaryEpsilonRate).toEqual(expected.binaryEpsilonRate);
    expect(actual.decimalEpsilonRate).toEqual(expected.decimalEpsilonRate);
    expect(actual.powerConsumption).toEqual(expected.powerConsumption);
  });

  it('part2', () => {
    expect(1).toEqual(1);
  });

  describe('utils', () => {
    it('mostOftenChar', () => {
      expect(mostOftenChar(['0', '1', '1'])).toEqual('1');
    });

    it('swapRowsAndColumnsOfStringArray', () => {
      const actual = swapRowsAndColumnsOfStringArray(['000', '111']);

      expect(actual).toEqual([
        ['0', '1'],
        ['0', '1'],
        ['0', '1'],
      ]);
    });
  });
});
