const fs = require('fs-extra');
const package = require('./projects/vanilla-lib/package.json');

fs.writeFileSync(
    './projects/vanilla-lib/src/lib/config.ts',
    `export const VERSION = '${package.version}';\n`,
    { encoding: 'utf-8' })
