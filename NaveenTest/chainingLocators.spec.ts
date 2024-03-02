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

test("locator test", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();

  await page.goto("https://www.orangehrm.com/30-day-free-trial/");

  //   await page.locator("form#Form_getForm >> #Form_getForm_Name").fill("week");
  //   await page.locator("form#Form_getForm >> text=Get Your Free Trial").click();
  // or

  //   const form = page.locator("form#Form_getForm");
  //   const getYourFreeButton = page.getByRole("button", {
  //     name: "Get Your Free Trial",
  //   });
  //   await form.locator(getYourFreeButton).click();

  //or
  await page
    .locator("form#Form_getForm")
    .locator("#Form_getForm_Name")
    .fill("week");
  await page
    .locator("form#Form_getForm")
    .getByRole("button", { name: "Get Your Free Trial" })
    .click();

  await page.waitForTimeout(3000);
});
