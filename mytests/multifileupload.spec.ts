import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'
 
test('Multi file upload', async()=>{

      const browser:Browser = await chromium.launch({headless: false , channel:'chrome'});
      const page:Page = await browser.newPage();

      await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

      //Multiple files
      await page.locator("input[name='filesToUpload']")
        .setInputFiles([
            path.join('E:/PlayWrightTypeScript/mytests/login.txt'),
            path.join('C:/Users/LENOVO/Pictures/Screenshots/Screenshot (2).png')

        ])

        await page.waitForTimeout(3000);

        //single file
        await page.locator("input[name='filesToUpload']")
        .setInputFiles([
            path.join('E:/PlayWrightTypeScript/mytests/login.txt')])    
        
            await page.waitForTimeout(3000);
        
        //deselect uploaded file
        await page.locator("input[name='filesToUpload']").setInputFiles([]);

        await page.waitForTimeout(3000);

        //buffer memory
        await page.locator("input[name='filesToUpload']").setInputFiles({
            name: 'naveen_resume.txt',
            mimeType: 'text/plain',
            buffer: Buffer.from('this is naveen resume')

        })
        await page.waitForTimeout(5000);
}); 