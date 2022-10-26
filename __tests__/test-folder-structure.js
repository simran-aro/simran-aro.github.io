/* globals describe it expect */
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import './jest-extensions';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('The site folder', () => {
  it ('should contain an index.html file', async () => {
    const siteDir = __dirname + '/../site/';
    await expect(siteDir).toContainFile('index.html');
  });
});
