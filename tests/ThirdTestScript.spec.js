const { test, expect } = require("@playwright/test")

test("Oracle Navigator", async function ({ browser, page }) {

    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://iarzqy-test.fa.ocs.oraclecloud.com/fscmUI/faces/FuseWelcome")

    await page.locator("//input[@placeholder='User name or email']").fill("Stella.Hall")
    await page.locator("//input[@placeholder='Password']").fill("Navigator_123")
    await page.locator("//span[text()='Sign In']").click()

    await page.locator('//a[contains(@id,"_UIShome")]').click()
    await page.locator('//a[contains(@id,"tooltipNext")]').click();

    await page.locator("//a[text()='Me']").click();
    await page.locator("//a[text()='Personal Brand']").click()
    await page.locator("//span[text()='Surveys']").click();
    await page.waitForTimeout(4000);
   
    await page.getByRole('button', { name: 'Add' }).click();

    await page.locator("input[type='text'].x1s7").click();
    await page.waitForTimeout(2000);
    await page.locator("input[type='text'].x1s7").fill("Amanda Aver");

    await page.keyboard.press("y")
    await page.waitForTimeout(5000);
    await page.locator("//tr//td//div[text()='Amanda Avery']").click()
    //await page.keyboard.press("Enter")
    await page.waitForTimeout(5000);
    await page.locator("//button[@title='Continue']").click();
    await page.waitForTimeout(3000);

    const randomSurvey = `UK_Survey${Math.floor(Math.random() * 1000)}`;
    await page.locator("//input[@aria-label='Survey Name']").fill(randomSurvey)
    await page.locator("//input[@aria-label='Existing Questionnaire']").click()
   // await page.waitForTimeout(5000)
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")

    await page.locator("//div[@class='callToActionSubmit xeq p_AFTextOnly']").click();

    await page.locator("//img[@title='Settings and Actions']").click()
    await page.locator("//a[text()='Sign Out']").click();
    //await page.waitForTimeout(5000)

    // await context.close();

    // const context2 = await browser.newContext();
    // const newPage = await context2.newPage();
    await context.clearCookies();
     await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
      });
    
    await page.reload();
    await page.goto("https://iarzqy-test.fa.ocs.oraclecloud.com/fscmUI/faces/FuseWelcome")
     
    await page.waitForTimeout(3000)
    await page.locator("//input[@placeholder='User name or email']").fill("Amanda.Avery")
    await page.locator("//input[@placeholder='Password']").fill("Navigator_123")
    await page.locator("//span[text()='Sign In']").click()
    
    await page.locator("//a[text()='Me']").click();
    await page.locator("//a[text()='Personal Brand']").click()
    await page.locator("//span[text()='Surveys']").click();
    await page.waitForTimeout(4000);

    const surveyDynamicXpath = "//a[text()='" + randomSurvey + "']"

    await page.locator(surveyDynamicXpath).click()

    await page.locator("//textarea[contains(@aria-label,'What are two or three strengths that you see in my actions and behaviors?')]").fill("Empathetic, Resourceful, Self Motivated.")
    await page.locator("//textarea[contains(@aria-label,'If you had to make two suggestions for improving my work, what would they be?')]").fill("Planning your daily schedule, plus organizing and prioritizing task and goals, is essential to improving your work performance. When making your to-do list,be reasonable and keep task achievable.")
    await page.locator("//label[normalize-space()='Outstanding']").click()

    await page.locator("//span[text()='Sub']").click();
    await page.locator("//img[@title='Settings and Actions']").click()
    await page.locator("//a[text()='Sign Out']").click();

})