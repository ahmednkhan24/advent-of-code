import { parseTxtFile } from '../utils/parseTxtFile';

const countIncreases = (data: number[]) => {
  let numIncreases = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1]) {
      numIncreases++;
    }
  }
  return numIncreases;
};

const count3measures = (data: number[]) => {
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
  const data = parseTxtFile('day1-input');

  // How many measurements are larger than the previous measurement?
  const num = countIncreases(data);
  console.log('num: ', num);

  // How many sums are larger than the previous sum?
  const num2 = count3measures(data);
  console.log('num2: ', num2);
};
