import { test, expect } from '@playwright/test';

test('testJFM', async ({ page }) => {
  await page.goto('https://live-aps1.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjQyZTNhZWRhLWE4YWItNGNiYi05YTg1LTc3MTA2N2FlM2Q0MyJ9.eyJ1c2VyTGl2ZUlkIjoiOWY1NGI1ODctNmE5MC00MjJiLWIwMmEtNWE4M2YzZDFmMTY0Iiwicm9vbUlEIjoiR1JDLUIzLUpGTSIsImNhbktpY2tVc2VyIjpmYWxzZSwibWljRmFkZXJJZCI6NSwibWljRmFkZXJMYWJlbCI6Ik5FVyIsImJpdFJhdGUiOjI1NjAwMCwibWljQWx3YXlzT24iOmZhbHNlLCJzZXJ2ZXJDb2RlIjoiQVdTLUlELUpLVCIsIm5ldHdvcmtDb2RlIjoiSkZNIiwiYWxsb3dGYWRlckNoYW5nZSI6dHJ1ZSwiaXNTZXJ2ZXIiOjAsImVjaG9Db21wZW5zYXRpb25FbmFibGUiOmZhbHNlLCJyZW9yZGVyRmFkZXIiOmZhbHNlLCJ0aW1lWm9uZSI6IkV1cm9wZS9CZXJsaW4iLCJuZXR3b3JrTW9kZSI6ZmFsc2UsImFsdGVybmF0ZVZpZXciOnRydWUsImNvbm5lY3RCcmlkZ2UiOmZhbHNlLCJyYWRpb0luZm9ybWF0aW9uIjpbeyJyYWRpb05hbWUiOiJKb3R0IEZNIiwicmFkaW9JbWFnZSI6Imh0dHBzOi8vZGIxcXU2c3d5cWY2eC5jbG91ZGZyb250Lm5ldC9hZmZpbGlhdGVzL2pmbS5zdmciLCJyYWRpb0NvZGUiOiJHUkMiLCJjaGFubmVsSWQiOiIxNjY1IiwibmV0d29ya0lkIjoiMTI3IiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJHUkMiLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6IjQ5ZWY5NGUwLWY4NjItNGMxNy1hNmYzLTFhODZlNzVlMjZjOSIsImlhdCI6MTc2NjU0MzYyOCwiZXhwIjoxNzY5MTM1NjI4fQ.h7aFpw7KLwZKDpsnBxzgRAkFjuNbEcEUyBzeubvlWziIHWM2EFBGeE9JkhcQxNO_BMQQ7OwGkJ_0ksqVVY1s6ou1X33yHhKEvLv8UuAQFUSCSGziJkpTJifEokDZY1ubwK6bmkjzlSWzTJiCSWFY7Yx2ND5rfQtUyJ-mLEUtZCA5C_UYvWsqr_0Nsq9PeTOs1L9XnSoIxYKnaDMfYlTjQu9vUtquXtMKY7lrZLy3wnTKPaDAclTDIE63AhM3SsEPRpr4TEvyah1Z5r-oPnvyxmNzb-Y8s6ImH0CfaGDi31HmAeGQ_YIixEmD6iMwnzkxi47Vsc523rtHXtgHU1Mb59694vwfRYlXcq1W1Bd7aFXWlAQmmfGkiiUIRjhyaboEY54DVDPisu_InnBr5wQALCtbKHi3wPiGXe7Ui3EW0Sjx5DJGIFHs6yGMc7QQc-2uZGL5T3JG6oPYmdz5r0OJtYmg9CFICq0mW0sl18KtaFHYtb6KjQ4BFIBFn6Qi12HKtPyRZqUWcB7zsCMlBBqArSH9FEZ7nJ7l2835BgXIwqADRBscaaTG5nvPuMIdh-QFyjgkkV2soLLPd-Z54nwGCgm48CxByVoktSglH9rzWB2RPL4QILaFre0CGoNPc55mUwob3W1RAZb8_RBVBHg7dVynMACwxjMhQg65cpMfpzA');
  const  okButton = page.getByRole('button', { name: 'OK' });

await expect (okButton).toBeVisible();
await expect(okButton).toBeEnabled();
await okButton.click();

const setting = page.locator('.settings-button').first();
await expect(setting).toBeVisible();
await expect(setting).toBeEnabled();
await setting.click();

const overlaysetting = page.getByText('Audio Replace ModeTrueFalseDisable Keyboard ShortcutsBoost ModeEcho');
await expect(overlaysetting).toBeVisible();
await expect(overlaysetting).toBeEnabled();


const Switch = page.locator('.react-switch-bg').first();
await expect(Switch).toBeVisible();
await expect(Switch).toBeEnabled();
await Switch.click();

const comboBox = page.getByRole('combobox');

await expect(comboBox).toBeVisible();
await expect(comboBox).toBeEnabled();
await comboBox.selectOption('a');
await expect(comboBox).toHaveValue('a');

const Save = page.getByRole('button', { name: 'Save Settings' });
await expect(Save).toBeVisible();
await expect(Save).toBeEnabled();
await Save.click();  

await page.mouse.click(10, 10);
 

const content = page
  .getByTestId('info-[object Object]')
  .first();

await expect(content).toBeVisible();
await expect(content).toBeEnabled();

const linkmode = page.locator('.link-mode').first();
await expect(linkmode).toBeVisible();
await expect(linkmode).toBeEnabled();
await linkmode.click();


const target = page.getByText(/^Player 1/);
await content.dragTo(target);

// tekan keyboard 1
//await expect(target).toBeVisible();
await expect(target).toBeEnabled();


  
await target.click(); 
// fokus ke Player 1
await page.keyboard.press('Digit1');

  


});