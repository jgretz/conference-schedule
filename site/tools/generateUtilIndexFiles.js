import generateIndexFiles from './generateIndexFile';

generateIndexFiles({
  searchPath: '../app',
  includeTests: [/util/],
  formatInput: () => '*',
});
