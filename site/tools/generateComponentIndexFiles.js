import _ from 'lodash';
import generateIndexFiles from './generateIndexFile';

generateIndexFiles({
  searchPath: '../app/features',
  includeTests: [/features(?:\/|\\).+?(?:\/|\\)components$/],
  excludeTests: [
    /features(?:\/|\\).+?(?:\/|\\)styles/,
    /features(?:\/|\\).+?(?:\/|\\)reducers(\/|\\)components$/,
  ],
  formatInput: fileName => `{default as ${_.upperFirst(fileName)}}`,
});
