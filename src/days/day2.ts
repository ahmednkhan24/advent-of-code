import { parseTxtFile } from '../utils';

const part1 = (input: string[]) => {
  const finalHorizontalPosition = input
    // only keep the horizontal positions
    .filter((line) => line.toLowerCase().includes('forward'))
    // only keep the numeric value
    .map((line) => {
      const amount = line.toLowerCase().split(' ')[1];
      return parseInt(amount);
    })
    // sum all the values together
    .reduce((total, current) => total + current, 0);

  const finalDepth = input
    // remove the horizontal positions
    .filter((line) => !line.toLowerCase().includes('forward'))
    // convert values from ['up 4', 'down 3'] to [-4, 3]
    .map((line) => {
      const [direction, amount] = line.toLowerCase().split(' ');
      const amountInt = parseInt(amount);
      return direction === 'down' ? amountInt : amountInt * -1;
    })
    // sum all the values together
    .reduce((total, current) => total + current, 0);

  return [finalHorizontalPosition, finalDepth];
};

export const day2 = () => {
  const input = parseTxtFile('day2-input');

  const [position, depth] = part1(input);
  console.log('position: ', position);
  console.log('depth: ', depth);
  console.log('position * depth = ', position * depth);
};
