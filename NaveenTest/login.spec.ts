import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test("NaveenAutomationLab Login test", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  const emailId: Locator = await page.locator("#input-email");
  const password: Locator = await page.locator("#input-password");
  const loginBtn: Locator = await page.locator("[value='Login']");

  // perform action
  await emailId.fill("Enverv1PW@mars.com");
  await password.fill("MyTestPW@999");
  await loginBtn.click();

  const title = await page.title();
  console.log("Home page title: ", title);

  await page.screenshot({ path: "NaveenTest/Screenshots/homepage.png" });

  await expect(title).toEqual("My Account");
  await browser.close();
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
  await Email.fill("Enverv13PW@mars.com");
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
