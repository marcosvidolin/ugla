const fs = require('fs-extra');
const package = require('./projects/lotus/package.json');

fs.writeFileSync(
    './projects/lotus/src/lib/config.ts',
    `export const VERSION = '${package.version}';\n`,
    { encoding: 'utf-8' })
