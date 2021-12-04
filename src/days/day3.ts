import { parseTxtFile } from '../utils';

export const swapRowsAndColumnsOfStringArray = (arr: string[]) => {
  const restructured = [];

  // loop through how many items we have
  for (let i in arr) {
    // loop through the length of 1 item
    for (let j = 0; j < arr[0].length; j++) {
      restructured[j] = restructured[j]
        ? [...restructured[j], arr[i][j]]
        : [arr[i][j]];
    }
  }

  return restructured;
};

export const mostOftenChar = (arr: string[]) =>
  arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();

export const part1 = (input: string[]) => {
  const restructured = swapRowsAndColumnsOfStringArray(input);
  const binary = restructured.map((row) => mostOftenChar(row));
  const epsilon = binary.map((bit) => (bit === '1' ? '0' : '1'));

  const binaryGammaRate = binary.join('');
  const decimalGammaRate = parseInt(binaryGammaRate, 2);
  const binaryEpsilonRate = epsilon.join('');
  const decimalEpsilonRate = parseInt(binaryEpsilonRate, 2);
  const powerConsumption = decimalGammaRate * decimalEpsilonRate;

  return {
    binaryGammaRate,
    decimalGammaRate,
    binaryEpsilonRate,
    decimalEpsilonRate,
    powerConsumption,
  };
};

export const part2 = () => {
  console.log('part2');
};

export const day3 = () => {
  const input = parseTxtFile('day3-input');

  const gammaRate = part1(input);
  console.log('part1: ', gammaRate);

  part2();
};
