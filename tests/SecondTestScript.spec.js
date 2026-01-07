const {test,expect} = require ("@playwright/test")

test("Oracle Navigator",async function ({browser,page}) 
{
   await page.goto("https://iarzqy-test.fa.ocs.oraclecloud.com/")
   //await page.goto("https://iarzqy-dev6.fa.ocs.oraclecloud.com")

   
   await page.locator("//input[@placeholder='User name or email']").fill("Andy.Bitterman",{delay:100})
   await page.locator("//input[@placeholder='Password']").fill("Navigator_123")
   await page.locator("//span[text()='Sign In']").click()

    await page.locator('//a[contains(@id,"_UIShome")]').click()
    await page.locator('//a[contains(@id,"tooltipNext")]').click()
    await page.locator("//a[text()='My Client Groups']").click()
    await page.locator("//a[text()='Communicate']").click()

    await page.locator("//span[text()='Campaigns']").click()
   
    await page.locator("//span[text()='Create']").click()
  
    await page.locator("//a[text()='Emails Campaign']").click()

    const randomValue = `MM_${Math.floor(Math.random() * 1000)}`;
    await page.locator("//input[@id='campaign-name|input']").fill(randomValue);
    //await page.locator("//input[@id='campaign-name|input']").fill("MM_Malvi")

    await page.getByRole('combobox', { name: 'Team' }).click();
   
    await page.locator("//span[text()='Performance Management']").click()

    await page.locator("//label[text()='Categories']").click()

    await page.locator("//span[text()='Share General Info']").click()

    await page.locator("//span[text()='Collect Responses']").click()

    await page.locator("//button[text()='Continue']").click()

    //await page.waitForTimeout(5000);

    //await page.locator("//button[@aria-label='Continue']").click()
    await page.locator("//button[text()='Continue']").click()

    await page.waitForTimeout(5000);

    await page.locator("//input[@id='email-sms-campaign-purpose|input']").fill("Share General Info")
    await page.keyboard.press("ArrowDown");
    await page.locator("li[role='row']", { hasText: "Share General Info" }).click();

    await page.keyboard.press("Tab")
    //await page.locator("//input[@id='email-sms-campaign-purpose|input']").click()
    //await page.locator("//span[text()='Share General Info']").click()

    await page.locator("//input[@id='oj-searchselect-filter-email-sms-campaign-duration|input']").fill("One-time")
    await page.keyboard.press("ArrowDown")
    await page.locator("li[role='row']", { hasText: "One-time" }).click();

    await page.locator("//button[@aria-label='Continue']").click()
    await page.keyboard.press("Tab")

    await page.locator("//input[contains(@id,'oj-selectsingle-') and @role='combobox']").fill("Eligibility Profile")
    await page.keyboard.press("ArrowDown")
    await page.locator("li[role='row']", { hasText: "Eligibility Profile" }).click();
    
    await page.locator("//input[contains(@id,'audience-source-single-select|input') and @role='combobox']").fill("Emp Comm - Working As Manager - BR")
    await page.keyboard.press("ArrowDown")
    await page.locator("li[role='row']", { hasText: "Emp Comm - Working As Manager - BR" }).click();
  
    await page.locator("//button[@aria-label='Continue']").click()

    await page.locator("//span[text()='Create']").click()

    const randomEmail = `${Math.floor(Math.random() * 1000)}_mm@gmail.com`;
    await page.locator("//input[contains(@id,'Name|input')]").fill(randomEmail)

    await page.locator("//span[text()='Save']").click()
    
    await page.locator("//span[text()='Actions for Email Details']").click()
    
    const context = page.context();
    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click("//a[text()='Design Email Content']")
]);

await newPage.waitForLoadState();
await newPage.bringToFront();

await newPage.locator('//tbody/tr[1]').click();

await newPage.locator("//button[text()='Open']").click();

await newPage.locator("//label[text()='Enter email subject.']/following-sibling::input").fill("Testing")
//await page.waitForTimeout(5000)
///code to add here 

//await newPage.locator("//div//img[@id='section_vertical_section_1_0_0cwv9psl_0']").hover();

//await newPage.locator("//div//img[@title='Delete Element']").click();

//end code 

//await newPage.locator("//p[(text()='Add Element')]").click();

//await newPage.locator("//button[@aria-label='Add Paragraph']").click()

//await newPage.locator("//div[contains(@aria-label,'Editor editing area: main')]").fill("Testing data")

//await newPage.locator("//button[(text()='Done')]").click()

await newPage.locator("//span[@class='oj-ux-ico-save']").click()

await page.bringToFront();

await page.locator("//span[text()='Actions for Email Details']").click()

await page.locator("//a[text()='Schedule']").click()

await page.locator("//oj-toolbar[contains(@class,'oj-sp-create-edit-drawer-footer-non-overflow-toolbar')]//button[@aria-label='Schedule']").click()

await page.locator("//button[text()='Submit']").click()

await page.locator("//div[@class='oj-avatar-background-image']").click()

await page.locator("//a[text()='Sign Out']").click()

})