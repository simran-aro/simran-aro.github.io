/* globals page, beforeAll, describe, it, expect */
import './jest-extensions.js';

beforeAll(async () => {
  await page.goto('http://localhost:8080/site/');
});

describe('The schoolList', () => {
  it('should be defined', async () => {
    await expect(page).toHaveVariableInGlobalScope('schoolList');
  });

  it('should start with about 325 children', async () => {
    const initialLength = await page.evaluate(() => {
      const initialLength = window.schoolList.childElementCount;
      return initialLength;
    });
    expect(initialLength).toBeCloseTo(325, -1);
  });
});