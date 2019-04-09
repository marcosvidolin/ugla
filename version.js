const fs = require('fs-extra');
const package = require('./projects/ng-lotus/package.json');

fs.writeFileSync(
    './projects/ng-lotus/src/lib/config.ts',
    `export const VERSION = '${package.version}';\n`,
    { encoding: 'utf-8' })
