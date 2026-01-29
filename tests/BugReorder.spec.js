import { test, expect } from '@playwright/test';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjhhNzliODI3LTI1Y2QtNDc4Mi05MDcxLTc0MGIxYWZjNzJmYSJ9.eyJ1c2VyTGl2ZUlkIjoiYjMzNGIyOWUtNmMwZi00ZTNhLWEzNDEtMWJjMDQ4MDAwY2JlIiwicm9vbUlEIjoiRlJCLUIxLUJXRSIsImNhbktpY2tVc2VyIjpmYWxzZSwibWljRmFkZXJJZCI6NiwibWljRmFkZXJMYWJlbCI6IlRFU1QiLCJiaXRSYXRlIjoyNTYwMDAsIm1pY0Fsd2F5c09uIjpmYWxzZSwic2VydmVyQ29kZSI6IkFXUy1JRC1KS1QiLCJuZXR3b3JrQ29kZSI6IkJXRSIsImFsbG93RmFkZXJDaGFuZ2UiOnRydWUsImlzU2VydmVyIjowLCJlY2hvQ29tcGVuc2F0aW9uRW5hYmxlIjpmYWxzZSwicmVvcmRlckZhZGVyIjpmYWxzZSwidGltZVpvbmUiOiJFdXJvcGUvQmVybGluIiwibmV0d29ya01vZGUiOmZhbHNlLCJhbHRlcm5hdGVWaWV3Ijp0cnVlLCJjb25uZWN0QnJpZGdlIjpmYWxzZSwicmFkaW9JbmZvcm1hdGlvbiI6W3sicmFkaW9OYW1lIjoiQmF5ZXJud2VsbGUiLCJyYWRpb0ltYWdlIjoiaHR0cHM6Ly9kYjFxdTZzd3lxZjZ4LmNsb3VkZnJvbnQubmV0L2FmZmlsaWF0ZXMvYndlLnN2ZyIsInJhZGlvQ29kZSI6IkZSQiIsImNoYW5uZWxJZCI6IjU2MyIsIm5ldHdvcmtJZCI6IjYwIiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJGUkIiLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6IjhjNzAwNGVmLWU3MTktNGNlMS1iM2JkLWZhZmY4MGVlYjg2ZCIsImlhdCI6MTc2OTY3MDgzMCwiZXhwIjoxODIxNTEwODMwfQ.HTwl3vwJ1Ti-MGc_OtCalDlO2P6NZbCIG6Z54aI_fIFw_6BkfSPYLgvWMgDUtASA9VFQBFEtWcaNPffFEocdgJnBQ_s45qkUR1M4mKP0Qx9x9DLpay6pRc7sA-XnKmmFQR9I305--kCQnmlkZMUMh549kmx7fAbrMDyBq4X113mOdxCMvkfXChem0OQXDKfWjaLaXHL2cgPGD6QgPOM_BWROKtJCbtN8y_z9Lf6n1PcssyRlwuMXwY8fgcMd91f_Drarp5b4MgWxByDrMcw9Tk4ptxeaQD6nu6gjjL4Agb1GTkY4w_fxh3fX4TPSJRZjtvajvfB8w0MFOt-ax39bQoK2bzGH1TH6sFqZfPPf715E-BBTTdBnG0jWq9SoSDcOKb7IY1x-TKXwWfFEN6PGcrrbCgyLQzssUMdPPSZQqXsEDBQGGh4E_dR0kyxfc9SrgTiusRoEPjLJGALrIsDUzcPC9GVV4wGuPE0J8qWVUyqOJsKqJ8vJYofFzYoRUzfuQ5kJaTsjp84naH_kDcc4OA2dKdqDcSUY5zy9IWlPCBc0ZqX83s2D5QMyfC7dixR10-yhTdXmLkq-CHXBl0egKZHF0B-RMDZLWFZF-m1lVbbF6yTw2fg-W9Lk0bH7xk1LEvT4ywWoO9OMTBr6OtW5crErDGaQ7EjBfnAxxyBLoFc';


test.beforeEach(async ({ page }) => {

    await page.goto(URL);

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


const AudioReplaceMode = page.getByRole('combobox').nth(3);
await expect(AudioReplaceMode).toBeVisible();
await expect(AudioReplaceMode).toBeEnabled();
await AudioReplaceMode.click();
await AudioReplaceMode.selectOption('a');
await expect(AudioReplaceMode).toHaveValue('a');

const DisableKeyboardShortcuts = page.locator('.react-switch-bg').first();
await expect(DisableKeyboardShortcuts).toBeVisible();
await expect(DisableKeyboardShortcuts).toBeEnabled();
await DisableKeyboardShortcuts.click();

const Save = page.getByRole('button', { name: 'Save Settings' });
await expect(Save).toBeVisible();
await expect(Save).toBeEnabled();
await Save.click();

await page.keyboard.press('Escape');

});



test('PlayoutManual', async ({ page }) =>  {


const content = page.getByTestId('info-[object Object]').nth(4);
  await expect(content).toBeVisible();
  await expect(content).toBeEnabled();

  const linkmode = page.locator('.info_box.box4 > .info_box_container > .link-mode');
  await expect(linkmode).toBeVisible();
  await expect(linkmode).toBeEnabled();

  await linkmode.click();

  const target = page.locator('div').filter({ hasText: /^Player 1$/ }).first();
  await expect(target).toBeVisible();
  await expect(target).toBeEnabled();

  await content.dragTo(target);

  await page.waitForTimeout(5000);
  await page.keyboard.press('1');


 const timer = page.locator('[role="player2"] .timer_dtime').first(); //ambil element timer
  let last = await timer.innerText(); // ambil durasi setelah link masuk
 
//  // tunggu sampai timer berubah → player mulai play
//  await expect.poll(async () => {
//    const current = await timer.innerText(); 
//    const started = current !== last; 
 
//    return started;
//  }, { timeout: 13000, 
//       intervals: [200] }).toBe(true);
 
//  console.log('Player started!');

  last = '';
await expect.poll(async () => {
  const current = await timer.innerText();
  const stopped = current === last;
  last = current;
  return stopped;
}, {  timeout: 16000, intervals: [200] }).toBe(true);

console.log('Player finished!');

 
//   const content2 = page
//  .getByTestId('info-[object Object]')
//  .nth(4);

// await expect(content2).toBeVisible();
// await expect(content2).toBeEnabled();


// const target2 = page.locator('div').filter({ hasText: /^Player 2$/ }).first();
// await expect(target2).toBeVisible();
//     await expect(target2).toBeEnabled();
 

// await content2.dragTo(target2);
// await page.waitForTimeout(5000);

// await page.keyboard.press('2');

// const player2 = page.locator('[role="player2"]');
//   const timer2 = player2.locator('.timer_dtime').first();

//   await expect(timer2).toBeVisible();

//   // tunggu hampir selesai
//   await page.waitForTimeout(10000);
//   const beforeEnd2 = await getTimerInSeconds(timer2);

//   // tunggu looping
//   await page.waitForTimeout(12000);
//   const afterLoop2 = await getTimerInSeconds(timer2);

//   // looping → timer reset
//   expect(afterLoop2).toBeLessThan(beforeEnd2);



});