import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('register a user', async()=>{
    //const browser:Browser = await chromium.launch({headless: false});
     const browser:Browser = await chromium.launch({headless: false, channel:"chrome"}); //=>To use Chrome browser
     const page:Page = await browser.newPage()

    
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    const firstName:Locator = page.locator('#input-firstname');
    const lastName:Locator = page.locator('#input-lastname');
    const email:Locator= page.locator("#input-email");
    const telephone:Locator= page.locator("#input-telephone");
    const password:Locator= page.locator("#input-password");
    const confirmPassword:Locator= page.locator("#input-confirm");
    const checkbox:Locator= page.locator("[name='agree']");
    const continueButton:Locator= page.locator("[value='Continue']");
    

    await firstName.fill("first");
    await lastName.fill("LAST");
    await email.fill("zyx@mailinator.com");
    await telephone.fill('9876543201');
    await password.fill("12345678");
    await confirmPassword.fill("12345678");
    await checkbox.click();
    await continueButton.click();

    const title = await page.title();
    console.log("register page title", title);

    await page.screenshot({path: 'register.png'});

    expect(title).toEqual('Your Account Has Been Created!');
    
    await browser.close();
    
});
