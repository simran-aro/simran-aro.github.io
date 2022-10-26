/* globals expect */

import { stat, readdir } from 'node:fs/promises';
import { relative } from 'node:path';

expect.extend({
  toHaveLength(received, n) {
    const pass = received.length === n;
    return { pass, message: () => `expected "${received}" ${pass ? 'not ' : ''}to have length ${n}` };
  },
  toHaveLengthAtLeast(received, n) {
    const pass = received.length >= n;
    return { pass, message: () => `expected "${received}" ${pass ? 'not ' : ''}to have length of at least ${n}` };
  },
  toContainKey(received, key) {
    const pass = key in received;
    return { pass, message: () => `expected the key "${key}" ${pass ? 'not ' : ''}to be among the keys ${JSON.stringify(Object.keys(received).sort())}` };
  },

  // toHaveSizeUnder
  // ---------------
  // Verify that the file with the `received` filename has a size under `bytes`.
  async toHaveSizeUnder(received, bytes) {
    const stats = await stat(received);
    const pass = stats.size < bytes;
    return { pass, message: () => `expected size (in bytes) of "${received}" to ${pass ? 'not ' : ''}be under ${bytes}.` };
  },

  // toContainFile
  // -------------
  // Verify that the folder with the `received` name contains a file called
  // `filename`.
  async toContainFile(received, filename) {
    const files = await readdir(received);
    const pass = files.includes(filename);
    const relativeDir = relative('.', received);
    return { pass, message: () => `expected folder "./${relativeDir}${relativeDir ? '/' : ''}" ${pass ? 'not ' : ''}to contain file "${filename}"; found [${files.map(f => `"${f}"`)}]` };
  },

  // toHaveVariableInGlobalScope
  // ---------------------------
  // Verify that the variable with the given `varname` is defined on the
  // `window` object of the `received` page. The `received` arguments should
  // be a Puppeteer page object.
  async toHaveVariableInGlobalScope(received, varname) {
    const page = received;
    const pass = await page.evaluate((varname) => window[varname] !== undefined, varname);
    return { pass, message: () => `expected variable \`${varname}\` ${pass ? 'not ' : ''}to be defined in the window global scope.` };
  },

  async toHaveSomeVariableInGlobalScope(received, varnames) {
    const page = received;
    const pass = await page.evaluate((varnames) => varnames.some(varname => window[varname] !== undefined), varnames);
    return { pass, message: () => `expected ${pass ? 'none' : 'one'} of the following variables to be defined in the window global scope: ${varnames}.` };
  },
});
