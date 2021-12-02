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

export const day1 = () => {
  const data = parseTxtFile('day1-input');

  // How many measurements are larger than the previous measurement?
  const num = countIncreases(data);
  console.log('num: ', num);
};
