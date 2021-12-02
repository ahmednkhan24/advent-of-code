import * as days from './days';

const getDayFromArgs = () => {
  const day = process.argv[2] && process.argv[2].toLowerCase();
  return day || 'day1';
};

const main = () => {
  const day = getDayFromArgs();
  days[day]();

  console.log('cwd: ', process.cwd());
  console.log('dirname: ', __dirname);
};

main();
