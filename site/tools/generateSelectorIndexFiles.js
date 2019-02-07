import generateIndexFiles from './generateIndexFile';

generateIndexFiles({
  searchPath: '../app/features',
  includeTests: [/features(?:\/|\\).+?(?:\/|\\)selectors/],
  formatInput: fileName => `{default as ${fileName}}`,
});
