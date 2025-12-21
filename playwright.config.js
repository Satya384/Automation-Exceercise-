// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import Module from 'node:module';
import { on } from 'node:process';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout:40*1000,
  expect:{
    timeout:40*1000
  },
  reporter:'html',
  screenshot:on,
  trace:on,
  use:{
    browserName: 'chromium',
    headless: false
  }
});

module.exports=config

