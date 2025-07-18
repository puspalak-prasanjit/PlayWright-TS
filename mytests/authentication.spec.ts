import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('auth test', async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel: 'chrome'});
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();

    const username = 'admin';
    const password = 'admin';

    //Hardcoded way: 
    
    //const authHeader = 'Basic ' + btoa(username+':'+password);
    //page.setExtraHTTPHeaders({Authorization : authHeader});

    //Alternate approach:
    page.setExtraHTTPHeaders({Authorization : createAuthHeader(username, password)}); 
    // the function createAuthHeader is called here. Alternate approach.
    
    
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

        
    await new Promise( () => {} )  ;
});

function createAuthHeader(username:any, password:any){
    return 'Basic ' +btoa(username+':'+password);
}
