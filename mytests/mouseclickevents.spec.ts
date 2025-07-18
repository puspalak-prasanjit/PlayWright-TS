import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('mouse click events', async()=>{

    const browser:Browser = await chromium.launch({headless: false, channel:"chrome"});
    const page:Page = await browser.newPage();

    //double click:
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
    await page.getByText('Double-click Me To See Alert').dblclick();
    await page.waitForTimeout(3000);

    //right click:
    await page.getByText('right click me').click({button: 'right'});
    await page.waitForTimeout(3000);

    //shift click:
    await page.goto('https://the-internet.herokuapp.com/shifting_content');
    await page.getByText('Example 1: Menu Element').click({modifiers: ["Shift"]});
    await page.waitForTimeout(10000);

    //mouse hover:
    await page.goto("https://www.spicejet.com/");
    await page.getByText('Add-ons').first().hover();
    await page.getByText('Visa Services').first().click();
    await page.waitForTimeout(5000);

    
});