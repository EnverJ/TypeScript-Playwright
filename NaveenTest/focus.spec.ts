import { test, Browser, Page, Locator, FrameLocator } from "@playwright/test";
import { log } from "console";
import path from "path";
import { webkit, chromium, firefox } from "playwright";

test("Focus element test", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto("https://www.orangehrm.com/en/30-day-free-trial");
  // accept cookies
  const cookies = await page.getByText("Accept Cookies");
  await cookies.focus();
  await cookies.click();

  const fullName = await page.locator("//input[@id='Form_getForm_Name']");
  await fullName.focus();
  await fullName.fill("weeklab");

  await page.waitForTimeout(5000);
});
