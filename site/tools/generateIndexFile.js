import _ from 'lodash';
import dir from 'node-dir';
import fs from 'fs';
import path from 'path';

export default args => {
  const {searchPath, formatInput, includeTests = [], excludeTests = []} = args;

  dir.subdirs(path.resolve(__dirname, searchPath), (err1, directoryPaths) => {
    for (const directoryPath of directoryPaths) {
      if (_.some(includeTests, test => !test.test(directoryPath))) {
        continue;
      }

      if (_.some(excludeTests, test => test.test(directoryPath))) {
        continue;
      }

      fs.readdir(directoryPath, (err2, files) => {
        if (err2) throw err2;

        // check if we need to skip this directory
        if (_.find(files, file => path.basename(file) === '.no-autogenerate')) {
          return;
        }

        files.sort();
        let indexContents = '';
        for (const file of files) {
          if (!/^.+\.js$/.test(file) || /^index\.js$/.test(file)) continue;

          const fileName = path.basename(file, '.js');
          indexContents += `export ${formatInput(
            fileName,
          )} from './${fileName}';\n`;
        }

        const indexFilePath = path.join(directoryPath, 'index.js');

        fs.writeFile(indexFilePath, indexContents, err3 => {
          if (err3) throw err3;
        });
      });
    }
  });
};
