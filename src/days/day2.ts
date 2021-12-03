import { parseTxtFile } from '../utils';

export const part1 = (input: string[]) => {
  const position = input
    // only keep the horizontal positions
    .filter((line) => line.toLowerCase().includes('forward'))
    // only keep the numeric value
    .map((line) => {
      const amount = line.toLowerCase().split(' ')[1];
      return parseInt(amount);
    })
    // sum all the values together
    .reduce((total, current) => total + current, 0);

  const depth = input
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

  return { position, depth };
};

export const part2 = (input: string[]) => {
  // from ['forward 4', 'up 2'] to [{ action: 'forward', amount: 4}, { action: 'up', amount: -2 }]
  const data = input.map((line) => {
    const [action, amount] = line.toLowerCase().split(' ');
    let amountInt = parseInt(amount);
    if (action === 'up') {
      amountInt *= -1;
    }

    return {
      action,
      amount: amountInt,
    };
  });

  const initialValue = {
    aim: 0,
    depth: 0,
    position: 0,
  };

  const final = data.reduce((accumulator, current) => {
    let aim = accumulator.aim;
    let depth = accumulator.depth;
    let position = accumulator.position;

    if (current.action !== 'forward') {
      aim += current.amount;
    } else {
      position += current.amount;
      depth += aim * current.amount;
    }

    return {
      aim,
      depth,
      position,
    };
  }, initialValue);

  return final;
};

export const day2 = () => {
  const input = parseTxtFile('day2-input');

  const { position: q1_position, depth: q1_depth } = part1(input);
  console.log('q1_position: ', q1_position);
  console.log('q1_depth: ', q1_depth);
  console.log('q1_position * q1_depth = ', q1_position * q1_depth);
  console.log();

  const { aim, depth, position } = part2(input);
  console.log('aim: ', aim);
  console.log('depth: ', depth);
  console.log('position: ', position);
  console.log('q2_position * q2_depth = ', depth * position);
};
