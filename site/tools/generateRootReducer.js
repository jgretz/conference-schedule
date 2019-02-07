/* eslint-disable no-console */
import _ from 'lodash';
import dir from 'node-dir';
import fs from 'fs';
import path from 'path';

dir.subdirs(
  path.resolve(__dirname, '../app/features'),
  (err1, directoryPaths) => {
    if (err1) throw err1;

    const features = _.reduce(
      directoryPaths,
      (result, directoryPath) => {
        const matches = directoryPath.match(
          /features(?:\/|\\)(.+?)(?:\/|\\)reducers$/,
        );
        if (!matches) return result;

        return [
          ...result,
          {
            path: matches[1],
            name: matches[1].replace(/\/|\\/, '_'),
            subFeatures: matches[1].split(/\/|\\/),
          },
        ];
      },
      [],
    );

    _.sortBy(features, f => f.name);

    const buildReducersJs = grouped =>
      _.flatMap(grouped, (list, name) => {
        if (list.length === 1 && list[0].subFeatures.length === 1)
          return [`${name}: ${list[0].name},`];
        const reducedList = list.map(f => ({
          name: f.name,
          subFeatures: f.subFeatures.splice(1),
        }));
        return [
          `${name}: combineReducers({`,
          ..._.flatMap(
            buildReducersJs(_.groupBy(reducedList, f => f.subFeatures[0])),
            l => `  ${l}`,
          ),
          '}),',
        ];
      });

    const featuresJs =
      features.length === 0
        ? []
        : [
            '  features: combineReducers({',
            ...buildReducersJs(_.groupBy(features, f => f.subFeatures[0])).map(
              l => `    ${l}`,
            ),
            '  }),',
          ];

    const rootReducerContents = [
      '/* eslint-disable sort-imports */',
      '/* eslint-disable camelcase */',
      '/* eslint-disable object-shorthand */',
      "import {combineReducers} from 'redux';",
      "import {connectRouter} from 'connected-react-router'",

      ...features.map(
        feature =>
          `import ${feature.name} from './features/${feature.path}/reducers';`,
      ),

      '\nconst rootReducer = history => combineReducers({',
      ...featuresJs,
      '  router: connectRouter(history),',
      '});\n',

      'export default rootReducer;\n',
    ].join('\n');

    fs.writeFile(
      path.resolve(__dirname, '../app/rootReducer.js'),
      rootReducerContents,
      err2 => {
        if (err2) throw err2;
      },
    );
  },
);
