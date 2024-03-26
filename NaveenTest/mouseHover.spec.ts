import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { get } from "http";
import { webkit, chromium, firefox } from "playwright";
import { text } from "stream/consumers";
test("move to element", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  page.goto("https://www.spicejet.com/");

  await page.getByText("Add-ons").first().hover();
  await page.getByText("Taxi").first().click();

  await page.waitForTimeout(3000);
});
