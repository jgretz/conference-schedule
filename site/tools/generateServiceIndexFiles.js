import generateIndexFiles from './generateIndexFile';

generateIndexFiles({
  searchPath: '../app/features',
  includeTests: [/features(?:\/|\\).+?(?:\/|\\)services$/],
  formatInput: fileName => `{default as ${fileName}}`,
});
