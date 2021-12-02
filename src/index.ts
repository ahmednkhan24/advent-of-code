import * as days from './days';

const main = () => {
  const day = (process.argv[2] && process.argv[2].toLowerCase()) || 'day1';
  days[day]();
};

main();
