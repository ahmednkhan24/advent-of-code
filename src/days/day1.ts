import { parseTxtFile } from '../utils';

export const part1 = (data: number[]) => {
  let numIncreases = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1]) {
      numIncreases++;
    }
  }
  return numIncreases;
};

export const part2 = (data: number[]) => {
  let numIncreases = 0;
  for (let i = 3; i < data.length; i++) {
    const currentTotal = data[i] + data[i - 1] + data[i - 2];
    const previousTotal = data[i - 1] + data[i - 2] + data[i - 3];
    if (currentTotal > previousTotal) {
      numIncreases++;
    }
  }
  return numIncreases;
};

export const day1 = () => {
  const input = parseTxtFile('day1-input').map((n) => parseInt(n));

  // How many measurements are larger than the previous measurement?
  const num = part1(input);
  console.log('num: ', num);

  // How many sums are larger than the previous sum?
  const num2 = part2(input);
  console.log('num2: ', num2);
};
