import generateIndexFiles from './generateIndexFile';

generateIndexFiles({
  searchPath: '../app/features',
  includeTests: [/features(?:\/|\\).+?(?:\/|\\)actions/],
  formatInput: () => '*',
});
