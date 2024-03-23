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

test("select based Drop down test", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto("https://the-internet.herokuapp.com/dropdown");

  const optionDropDown = "//select[@id='dropdown']";
  // await page.selectOption(optionDropDown, { value: "1" });
  // await page.selectOption(optionDropDown, { label: "Option 1" });
  // await page.selectOption(optionDropDown, { index: 1 });

  // chaining
  const AllOptions = await page.$$(optionDropDown + "/option");
  console.log(AllOptions.length);
  for (const e of AllOptions) {
    const text = await e.textContent();
    console.log(text);
    if (text === "Option 2") {
      await page.selectOption(optionDropDown, { label: text });
      break;
    }
  }
  await page.waitForTimeout(3000);
});
