/**
 * @license MIT
 */
/**
 * @fileoverview
 * Build the exe output. Use builtins only to avoid adding peerDeps.
 */

import { existsSync } from 'fs';
import { spawnSync } from 'child_process';

if (!existsSync('exports/exe.js')) {
  console.log('No exe export found in exports/.');
  process.exit(0);
}

spawnSync(
    'google-closure-compiler',
    [
      '--entry_point exports/exe.js',
      '-O ADVANCED',
      '--process_common_js_modules',
      '--module_resolution NODE',
      '--dependency_mode PRUNE',
      '--js $(npm root -g)/google-closure-library/closure/goog/base.js',
      '--js exports/exe.js',
      '--js_output_file dist/exe.js',
    ],
    {
      shell: true,
      stdio: 'inherit',
    },
);
