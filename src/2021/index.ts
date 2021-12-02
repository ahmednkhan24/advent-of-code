import * as days from './days';

const getDayFromArgs = () => {
  const day = process.argv[2] && process.argv[2].toLowerCase();
  return day || 'day1';
};

const main = () => {
  const day = getDayFromArgs();
  console.log('day: ', day);
  days[day]();
};

main();
