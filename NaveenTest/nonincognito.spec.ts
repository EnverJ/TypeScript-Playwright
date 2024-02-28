import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";
test("No Incognito test", async () => {
  //   const browser: Browser = await chromium.launch({
  //     headless: false,
  //     channel: "chrome",
  //   });
  // // run the incognito mode
  const browser: BrowserContext = await chromium.launchPersistentContext("", {
    headless: false,
    channel: "chrome",
  });
  // avoid two blank page
  const pages = browser.pages();
  const page: Page = pages[0];
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  );

  const firstName: Locator = page.locator("id=input-firstname");
  const lastName: Locator = page.locator("id=input-lastname");

  await firstName.fill("Automation");
  await lastName.fill("Week");

  await browser.close();

  //   await new Promise(() => {});
});
