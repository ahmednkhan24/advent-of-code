import fileStream from 'fs';

const parseFile = (path: string) =>
  fileStream
    .readFileSync(path)
    .toString()
    .split('\n')
    .filter((n) => n.length);

export const parseTxtFile = (fileName: string = 'day1-input') => {
  const path = `${process.cwd()}/dist/input/${fileName}.txt`;
  const data = parseFile(path);
  return data;
};
