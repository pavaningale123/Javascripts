import {test, expect} from '@playwright/test';

test('links count', async ({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/#");

const links=await page.$$('a');

console.log("Links are : ", links.lenght());



})