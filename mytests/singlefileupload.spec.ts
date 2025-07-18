import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'
 
test('Single file upload', async()=>{

      const browser:Browser = await chromium.launch({headless: false , channel:'chrome'});
      const page:Page = await browser.newPage();

      await page.goto("https://the-internet.herokuapp.com/upload");
     
       //upload a file:
      page.locator("#file-upload").setInputFiles('E:/PlayWrightTypeScript/mytests/login.txt');

      await page.waitForTimeout(2000);  

       //deselect a file:
       page.locator("#file-upload").setInputFiles([]);


      //Upload file from buffer memory
        await page.locator("input[name='file']").setInputFiles({
            name: 'naveen_resume.txt',
            mimeType: 'text/plain',
            buffer: Buffer.from('this is naveen resume')

        })
     await page.waitForTimeout(20000);   
}); 