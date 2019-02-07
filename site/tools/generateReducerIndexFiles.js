import _ from 'lodash';
import dir from 'node-dir';
import fs from 'fs';
import path from 'path';

const searchPath = '../app/features';

dir.subdirs(path.resolve(__dirname, searchPath), (err1, directoryPaths) => {
  for (const directoryPath of directoryPaths) {
    if (!/features(?:\/|\\).+?(?:\/|\\)reducers/.test(directoryPath)) {
      continue;
    }

    fs.readdir(directoryPath, (err2, files) => {
      if (err2) throw err2;

      // check if we need to skip this directory
      if (_.find(files, file => path.basename(file) === '.no-autogenerate')) {
        return;
      }

      const jsFiles = _.filter(
        files,
        file => /^.+\.js$/.test(file) && !/^index\.js$/.test(file),
      );
      jsFiles.sort();

      const indexReducerContents = [
        '/* eslint-disable sort-imports */',
        "import {combineReducers} from 'redux';",
        ...jsFiles.map(
          file =>
            `import ${path.basename(file, '.js')} from './${path.basename(
              file,
            )}';`,
        ),

        '\nexport default combineReducers({',
        ...jsFiles.map(file => `  ${path.basename(file, '.js')},`),
        '});\n',
      ].join('\n');

      const indexFilePath = path.join(directoryPath, 'index.js');
      fs.writeFile(indexFilePath, indexReducerContents, err3 => {
        if (err3) throw err3;
      });
    });
  }
});
