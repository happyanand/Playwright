// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 20 * 10000,
  expect : {
	  timeout: 50000,	
 },

  reporter: 'html',
  
  use: {
    channel: 'chrome',
    headless : false,
    screenshot : 'on', 
    video : 'off',
    actionTimeout : 40e5,
  },
  
});
