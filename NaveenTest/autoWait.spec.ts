import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  FrameLocator,
} from "@playwright/test";
import { log } from "console";
import { webkit, chromium, firefox } from "@playwright/test";
// https://playwright.dev/docs/actionability

test.use({
  actionTimeout: 10000, // set the action timeout to 10 seconds for all actions in test
});

test("auto wait", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  const page: Page = await browser.newPage();
  //   page.setDefaultTimeout(15000);
  // default timeout = 30 secs
  await page.goto("https://classic.freecrm.com/register/");
  //  await page.locator("//input[@name='agreeTerms1']").check({ timeout: 5000 });  // auto test
  await page.locator("//input[@name='agreeTerms1']").check(); // test.use
});

test("auto wait 2", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  const page: Page = await browser.newPage();
  //   page.setDefaultTimeout(15000);
  // default timeout = 30 secs
  await page.goto("https://classic.freecrm.com/register/");
  //  await page.locator("//input[@name='agreeTerms1']").check({ timeout: 5000 });  // auto test
  await page.locator("//input[@name='agreeTerms1']").check(); // test.use
});
