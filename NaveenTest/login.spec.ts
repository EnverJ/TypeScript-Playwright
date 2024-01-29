import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test("NaveenAutomationLab Login test", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  //const page: Page = await browser.newPage();

  // browser context 1 properties
  const browserContext_1: BrowserContext = await browser.newContext();
  const page1: Page = await browserContext_1.newPage();

  // browser context 2 properties
  const browserContext_2: BrowserContext = await browser.newContext();
  const page2: Page = await browserContext_2.newPage();

  // browser 1
  await page1.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  const emailId: Locator = await page1.locator("#input-email");
  const password: Locator = await page1.locator("#input-password");
  const loginBtn: Locator = await page1.locator("[value='Login']");

  // perform action
  await emailId.fill("Enverv1PW@mars.com");
  await password.fill("MyTestPW@999");
  await loginBtn.click();

  const title = await page1.title();
  console.log("Home page title: ", title);

  await page1.screenshot({ path: "NaveenTest/Screenshots/homepage.png" });

  await expect(title).toEqual("My Account");
  // await browser.close();

  // browser 2
  await page2.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  const emailId2: Locator = await page2.locator("#input-email");
  const password2: Locator = await page2.locator("#input-password");
  const loginBtn2: Locator = await page2.locator("[value='Login']");

  // perform action
  await emailId2.fill("Enverv13PW@mars.com");
  await password2.fill("MyTestPW@999");
  await loginBtn2.click();

  const title2 = await page2.title();
  console.log("Home page title: ", title);

  await page2.screenshot({ path: "NaveenTest/Screenshots/homepage.png" });

  await expect(title2).toEqual("My Account");

  await browserContext_1.close();
  await browserContext_2.close();
  await browser.close();
  // await new Promise(() => {});  // prevent your script from existing!
});

test("NaveenAutomationLab--Register a new User", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  );

  // locate elements
  const fistName: Locator = page.locator("#input-firstname");
  const lastName: Locator = page.locator("#input-lastname");
  const Email: Locator = page.locator("#input-email");
  const PhoneNum: Locator = page.locator("#input-telephone");
  const password: Locator = page.locator("#input-password");
  const pwdConfirm: Locator = page.locator("#input-confirm");
  const privatePolicy: Locator = page.locator("[name='agree']");
  const continueBtn: Locator = page.locator("//input[@type='submit']");

  // perform action
  await fistName.fill("Enver");
  await lastName.fill("Jume");
  await Email.fill("Endverv13PW@mars.com");
  await PhoneNum.fill("7000009999");
  await password.fill("MyTestPW@999");
  await pwdConfirm.fill("MyTestPW@999");
  await privatePolicy.check();
  await continueBtn.click();

  // const title = await page.title();
  await page.screenshot({
    path: "NaveenTest/Screenshots/RegisterSuccessPage.png",
  });
  // await expect(title).toEqual("Register Account");

  // validate new page
  const RegTitle = await page.title();
  console.log("Regester page title is: ", RegTitle);
  await expect(RegTitle).toEqual("Your Account Has Been Created!");
  await browser.close();
});
