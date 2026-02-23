import { test, expect } from '@playwright/test';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjMzYWVmNDQ1LTA2ZWItNGRjNS1iMjliLWM4OTNmZmIxN2ZiMyJ9.eyJ1c2VyTGl2ZUlkIjoiOTA0NzRmNWItYjA4NC1iZmQyLWZmMGYtYzQ1MTU4YmZmYmY4Iiwicm9vbUlEIjoiRlJCLUIxLUJXRSIsImNhbktpY2tVc2VyIjp0cnVlLCJtaWNGYWRlcklkIjoiNCIsIm1pY0ZhZGVyTGFiZWwiOiJBdXRvVGVzdCIsImJpdFJhdGUiOjI1NjAwMCwibWljQWx3YXlzT24iOmZhbHNlLCJzZXJ2ZXJDb2RlIjoiQVdTLUlELUpLVCIsIm5ldHdvcmtDb2RlIjoiQldFIiwiYWxsb3dGYWRlckNoYW5nZSI6dHJ1ZSwiaXNTZXJ2ZXIiOjAsImVjaG9Db21wZW5zYXRpb25FbmFibGUiOmZhbHNlLCJyZW9yZGVyRmFkZXIiOmZhbHNlLCJ0aW1lWm9uZSI6IkV1cm9wZS9CZXJsaW4iLCJuZXR3b3JrTW9kZSI6ZmFsc2UsImFsdGVybmF0ZVZpZXciOnRydWUsImNvbm5lY3RCcmlkZ2UiOmZhbHNlLCJyYWRpb0luZm9ybWF0aW9uIjpbeyJyYWRpb05hbWUiOiJCYXllcm53ZWxsZSIsInJhZGlvSW1hZ2UiOiJodHRwczovL2RiMXF1NnN3eXFmNnguY2xvdWRmcm9udC5uZXQvYWZmaWxpYXRlcy9id2Uuc3ZnIiwicmFkaW9Db2RlIjoiRlJCIiwiY2hhbm5lbElkIjoiNTYzIiwibmV0d29ya0lkIjoiNjAiLCJmb3JtYXRJZCI6IjEifV0sImxvY2FsQ29kZSI6IkZSQiIsImlzX3NoaWZ0X2NoZWNrIjpmYWxzZSwianRpIjoiYThlMjZiMDEtODZkZi00MWViLWI2Y2MtYzgyNWMwZDc1YjI2IiwiaWF0IjoxNzcxODM0ODA3LCJleHAiOjE3NzE4NDIwMDd9.D614-5xCjeYDT5ORrGYo_Qyngs6Ain__4k-du6kFMNtOXm7Zehy3ssUi2kMqUWyjdsOTIpS1IIccNfrTA4NduCjV97TmORcE41F_AtaT9dhnxE1LtsvuVJ_9VeXqeIf0EG2xlpQmV8MvXh091S1Lz0Zh_PmvO1aYK76_7VuMMOhDv0Mh4Y8JwBgAOljejveQX4U7rEpefneKBxxfN1Ip1aR7yxXYIBUBRRFqiUQ-SGnm0Oe9wTEeKtYp8kN7ICzVbn58KcDsID-ibdouQYDfmZhKHD6H-O8I7i_59riuXoj-XiOI-jo-U8LHbOnDvAaf6ZWfZyAwyfsWusbLsYlJ_MSgeZnhj7Og9v0RmmYOM-CVyZWVwUqv35J0xFQttIzQGhycWyx3kGIjUWi1825-nrHls7BqcguNnkZgz5h8lVlmfxVnIZsHIlCIZ9S--dmI6FcNWoD51Q0LKYRQUxg4xrb-RMBszRbeSE8GXx8PEE_DP8Uuf1js0uw0DmJBGCw0ZhQ7ytas1HWsV74G68iCePnxh9dhbicR9eKCgJC2FQq0huDMoeCh5Wb-Ut7mDSKKcYQgYOeizL8VaHVipeJtmCn4jf-j1EDvplZRF6AdiUX7hPIfBbw7j9GP5kWt_063hhmWakLMcxr0SRtWJO91LzF20NPB1Sue2XKDQILOer8';

// Helper function untuk polling timer hingga selesai
async function pollTimerUntilFinished(timerElement, playerName = 'Unknown') {
  // Ambil durasi awal
  let lastValue = await timerElement.innerText();

  // Tunggu sampai timer berubah → player mulai play
  await expect.poll(async () => {
    const current = await timerElement.innerText();
    const started = current !== lastValue;
    return started;
  }, { 
    timeout: 5000,  // 7 menit
    intervals: [200]  // Check setiap 200ms
  }).toBe(true);

  console.log(`[${playerName}] Duration started!`);

  // Tunggu sampai timer berhenti berubah → selesai
  lastValue = '';
  await expect.poll(async () => {
    const current = await timerElement.innerText();
    const stopped = current === lastValue;
    lastValue = current;
    return stopped;
  }, { 
    timeout: 420000,
    intervals: [200]
  }).toBe(true);

  console.log(`[${playerName}] Duration finished!`);
}

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


const content = page.getByTestId('info-[object Object]').nth(2);
  await expect(content).toBeVisible();
  await expect(content).toBeEnabled();

  // const linkmode = page.locator('.info_box.box2 > .info_box_container > .link-mode');
  // await expect(linkmode).toBeVisible();
  // await expect(linkmode).toBeEnabled();

  // await linkmode.click();

  const target = page.locator('div').filter({ hasText: /^Player 1$/ }).first();
  await expect(target).toBeVisible();
  await expect(target).toBeEnabled();

  await content.dragTo(target);

  await page.waitForTimeout(5000);
  await page.keyboard.press('1');

  // Ambil timer player1 dan polling
  const timerplayer1 = page.locator('[role="player1"] .timer_dtime').first();
  await pollTimerUntilFinished(timerplayer1, 'Player 1');

  // Ambil timer player2 dan polling
  // const timerplayer2 = page.locator('[role="player2"] .timer_dtime').first();
  // await pollTimerUntilFinished(timerplayer2, 'Player 2');

 
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