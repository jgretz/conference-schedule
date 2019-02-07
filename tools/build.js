/* eslint-disable no-var */
require('shelljs/global');

// clean
echo('Cleaning ...');
rm('-rf', './lib');
mkdir('./lib');

// move over package.json
echo('Moving package.json ...');

cp('./package.prod.json', './lib/package.json');

// build app
echo('Building Server ...');
cd('api');
exec('yarn', () => {
  exec('yarn build', () => {
    cd('../lib');
    
    mv('../api/lib/*', './');
    rm('-rf', '../api/lib');
    rm('constants/private.js');
  
    // build site
    echo('Building Site ...');

    // build admin spa and move it
    cd('../site');
    exec('yarn', () => {
      exec('yarn build', () => {
        cd('..');
        mv('./site/lib', 'lib/site');
      
        echo('Build Complete');
      });
    });
  });
});



