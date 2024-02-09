import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test("LOCATOR Test", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  );

  // create a wen element(locator) + perform action on it (click, fill)
  // 1. id:unique
  const firstName: Locator = page.locator("id=input-firstname");
  const lastName: Locator = page.locator("id=input-lastname");

  await firstName.fill("Automation");
  await lastName.fill("Week");

  // 2. class name: selector elements based on their class name.
  const logo: Locator = page.locator(".img-responsive");
  const logoExist: boolean = await logo.isEnabled();
  console.log(logoExist);

  // 3. Tet Selector: Select element s that contain specific text
  const header: Locator = page.locator("text=Register Account");
  const headerExist: boolean = await header.isEnabled();
  console.log(headerExist);

  const continueBtn: Locator = page.locator("text=Continue");
  const continueBtnExist: boolean = await header.isEnabled();
  console.log(continueBtnExist);

  // 4. CSS Selectors: Selects elements based on their CSS properties
  const email: Locator = page.locator("css=input#input-email");
  const telephone: Locator = page.locator("input#input-telephone");
  const privacyCheck: Locator = page.locator('css=input[type="checkbox"]');

  await email.fill("ossooo@gmail.com");
  await telephone.fill("12121212121");
  await privacyCheck.check();

  // 5. XPATH

  const pwd: Locator = page.locator("xpath=//input[@id='input-password']");
  const pwdConfirm: Locator = page.locator("//input[@id='input-confirm']");
  const searchBox: Locator = page.locator(
    '//input[@name="search" and @type="text"]'
  );

  await pwd.fill("456464654");
  await pwdConfirm.fill("456464654");
  await searchBox.fill("searching");

  // 6. Data-test-id
  // const logName:Locator = page.getByTestId("password");  //   https://playwright.dev/docs/api/class-framelocator#frame-locator-get-by-test-id

  await new Promise(() => {});
});
