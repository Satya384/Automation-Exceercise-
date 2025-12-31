// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import Module from 'node:module';
import { on } from 'node:process';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout:60*1000,
  expect:{
    timeout:40*1000
  },
  reporter:'html',
  use:{
    fullyParallel:true,
    screenshot: 'only-on-failure',
    trace: 'on',
    video:'retain-on-failure',
    browserName: 'chromium',
    headless: true,
  },
  projects:[
    {name:'chromium',use:{browserName:'chromium'}},
    {name:'firefox',use:{browserName:'firefox'}},
    {name:'safari',use:{browserName:'webkit'}}
  ]
});

module.exports=config;

