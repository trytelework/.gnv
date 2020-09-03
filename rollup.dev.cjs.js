/**
 * @license MIT
 */
/**
 * @fileoverview
 * Rollup CJS dev config.
 */

import glob from 'glob';
import { defaultPlugins } from './rollup.plugins.js';
import { devExternal } from './rollup.externals.js';

export default (
  glob.sync(
      'dev/*.mjs',
      /** exe can stay ES6 */
      { ignore: 'dev/exe.*' },
  ).map((file) => ({
    input: file,
    output: {
      file: file.replace('mjs', 'cjs'),
      format: 'cjs',
      exports: 'named',
    },
    plugins: defaultPlugins,
    external: devExternal,
  }))
);
