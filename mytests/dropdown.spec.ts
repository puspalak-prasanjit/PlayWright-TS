import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('dropdown test', async()=>{

    const browser:Browser = await chromium.launch({headless: false, channel:"chrome"});
    const page:Page = await browser.newPage();

    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

    const countryDropDown = 'select#Contact_CountryCode';

    //await page.selectOption(countryDropDown, {value: 'AD'}); //select by value
    //await page.selectOption(countryDropDown, {label: 'Austria'}); //select by text
    //await page.selectOption(countryDropDown, {index: 6}); //select by index

    //To get all elements in a dropdown:
    // select#Contact_CountryCode > option: this is the locator that contains all the elements in the dd
    const allOptions = await page.$$(countryDropDown + ' > option');
    console.log(allOptions.length);

    for (const e of allOptions) {
        const text = await e.textContent();
        console.log(text);
        if(text === 'India'){
            await page.selectOption(countryDropDown, {label: text});
            break;
        }
    }








    await page.waitForTimeout(15000);
});