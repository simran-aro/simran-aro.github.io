/* globals page, beforeAll, describe, it, expect */
import './jest-extensions.js';

beforeAll(async () => {
  await page.goto('http://localhost:8080/site/');
});

describe('The schoolMap', () => {
  it('should be defined', async () => {
    await expect(page).toHaveVariableInGlobalScope('schoolMap');
  });

  it('should start with about 325 feature layers', async () => {
    const initialLength = await page.evaluate(() => {
      const initialLength = Object.values(window.schoolMap._layers).filter(l => 'feature' in l && l.feature.geometry.type === 'Point').length;
      return initialLength;
    });
    expect(initialLength).toBeCloseTo(325, -1);
  });
});