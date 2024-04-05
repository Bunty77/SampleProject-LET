const { test, expect } = require('@playwright/test');

  test('Navigate to single ebooks1', async ({ page }) => {
    await page.goto('https://single-ebooks-qa.snpaas.private.springernature.com/');
    await page.getByText('Accept all cookies').click()
    await page.locator("//div[@class='eds-c-header__container']/div/a[@id='user-display-name']").click()
    //await page.waitForURL('https://staging-idp.springernature.com/login/adminportal?redirect_uri=https%3A%2F%2Fsingle-ebooks-qa.snpaas.private.springernature.com%2Fuser%3FredirectPath%3D%252F')
    await page.locator("//input[@id='login-username']").fill('casper.identity+jupiter@gmail.com')
    await page.locator("//input[@id='login-password']").fill('sputn1k')
    await page.locator("//button[@id='login-submit']").click()
    await expect(page.locator("//select[@id='organizations']")).toBeVisible()
    await console.log("Home page is displayed.")

    
    
    
    
    
    // //await page.locator("div[class='c-site-header__helpers'] a[id='basket-link']").click();
    // await page.locator('//*[@id="pleaseSelectedBooksPanel"]/a').click();
    // await page.locator('#search-ebooks').clear();
    // await page.locator('#search-ebooks').type('978-3-031-23908-3');
    // await page.locator("//button[@title='Submit search']//*[name()='svg']").click();
    // await page.locator('#addToBasketButton').nth(0).click();
    // await page.locator('#viewBasketLink').click();
    // await page.locator('#ctaButtonPrimary').click();
    // await loginPage.login('casper.identity+jupiter@gmail.com', 'sputn1k');
    // await page.locator('input[id="Springer Affiliates"]').click();

    // await menuItem.gotoSingleEbooksPage();
    // await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    // await expect(await page.url()).toContain('single-ebooks');
    // await expect(singleEbook.searchBox).toBeVisible();
    // await page.locator('.download-all-button').click();
  });