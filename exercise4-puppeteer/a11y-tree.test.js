/**
/* @jest-environment puppeteer
**/

import 'expect-puppeteer';
import path from 'path';
import fs from 'fs';

// describe('Accessibility Tree', () => {
//   beforeAll(async () => {
//     await page.goto('http://localhost:1234/passes');
//     // await page.goto('https://google.com');
//   });

//   it('should display heading text on page', async () => {
//     // await jestPuppeteer.debug();
//     // await expect(page).toMatch('Plan');
//     // await expect(page).toClick('button', { text: 'Join Now' });
//     await expect(page).toMatch('div.page-header-content', { text: 'Plan' });
//     // await expect(page).toMatch('body', { text: 'Google' });
//   });
// });

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google');
  });
});
