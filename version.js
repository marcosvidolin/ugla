const fs = require('fs-extra');
const package = require('./projects/ugla/package.json');

fs.writeFileSync(
    './projects/ugla/src/lib/config.ts',
    `export const VERSION = '${package.version}';\n`,
    { encoding: 'utf-8' })
