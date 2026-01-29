import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjRiNzUyMjFkLTA1NmEtNGFmZi1iMWY0LWExYzcwNWUwZGFkMSJ9.eyJ1c2VyTGl2ZUlkIjoiYjMzNGIyOWUtNmMwZi00ZTNhLWEzNDEtMWJjMDQ4MDAwY2JlIiwicm9vbUlEIjoiQlJNLUIxLUJSWCIsImNhbktpY2tVc2VyIjp0cnVlLCJtaWNGYWRlcklkIjoiNCIsIm1pY0ZhZGVyTGFiZWwiOiJURVNUIiwiYml0UmF0ZSI6MjU2MDAwLCJtaWNBbHdheXNPbiI6ZmFsc2UsInNlcnZlckNvZGUiOiJBV1MtU0ctU1RBR0lORyIsIm5ldHdvcmtDb2RlIjoiQlJYIiwiYWxsb3dGYWRlckNoYW5nZSI6dHJ1ZSwiaXNTZXJ2ZXIiOjAsImVjaG9Db21wZW5zYXRpb25FbmFibGUiOmZhbHNlLCJ0aW1lWm9uZSI6IkV1cm9wZS9CZXJsaW4iLCJhbHRlcm5hdGVWaWV3Ijp0cnVlLCJjb25uZWN0QnJpZGdlIjpmYWxzZSwicmFkaW9JbmZvcm1hdGlvbiI6W3sicmFkaW9OYW1lIjoiQnJpbGx1eCBSYWRpbyIsInJhZGlvSW1hZ2UiOiJodHRwczovL2RiMXF1NnN3eXFmNnguY2xvdWRmcm9udC5uZXQvYWZmaWxpYXRlcy9icmlsbHV4LXJhZGlvLnBuZyIsInJhZGlvQ29kZSI6IkJSTSIsImNoYW5uZWxJZCI6IjE1OTMiLCJuZXR3b3JrSWQiOiIxMTQiLCJmb3JtYXRJZCI6IjEifV0sImxvY2FsQ29kZSI6IkJSTSIsImlzX3NoaWZ0X2NoZWNrIjpmYWxzZSwianRpIjoiNmM3YjJhZDUtYTI5ZC00ODY1LWI2MTYtZWNiNzVlZDQ4ZTc5IiwiaWF0IjoxNzY5NTA5NjczLCJleHAiOjE4MjEzNDk2NzN9.q4tXmOEpzJ6_iE2QxtvSqkHhQOxfKQbbfzZmasDxfnlAIBGAIjVkruJDYFwpD2QBIVYBppeGF_KlYQW1M_ePaQSOT80X5XbbepQvphuG5yqB_3BvjS9DktH3RESveww_jQ-tEGr3OQvF66QmnP1Xb9aswbCociA3QbLR4ytw2lFehc7ZMKcss8xXV6nGZFtvB9TZMwT1hNu2QPydujyvIb6ElcWHej_DdB2MFHsuIXBmf1-yH_2068WRn5ZC6Hewt2co2lRHZmlMkiWeYEn2ZVzcUb5mrO-1DxUN8H6GI0gIwhcYgQP7FHTDjEIScPt1x_W7YZbsfYZSCx84jeloVQQFOsJ-D1K6ZudectDWsRSMoqixPuyhNp7gJNQl6Cmi6kFJrYc7apCevDmhwW6wVrxLLI_NXUJ74GaFgmU4togDfBFO-q6wDu_QCjKAZVJSnKh04Pqh6Y1b4Hmmx2OB_I1ckKiuUWEE5CTNkC8P-HFJ2joP_r2YRndCcCHPnNpeAbj0Ek459DZ3KRdwjuWSx9aOKOzkyW3YkOQAIlyq27xtQc6W2-pKgiZ69X_FKWi2AZyefmyZHIef5ZO7axL-X9IY7lnecT8gXep7DwD6u8R5ztmQiXzy3mO4-lCDuHT23whNS1WD1Z_Wxzye1QriNo1131TM5RGfM0paXT-RSjA');


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

test('BUG LINK MODE', async ({ page }) =>  {

  const playlist = page.getByTestId('info-[object Object]').nth(2);
  await expect(playlist).toBeVisible();
  await expect(playlist).toBeEnabled();

  const addaudio = page.locator('.header-playlist > div:nth-child(3)');
  await expect(addaudio).toBeVisible();
  await expect (addaudio).toBeEnabled();
  await addaudio.click();

  const overlayaddaudio = page.locator('div').filter({ hasText: /^Add Audio$/ });
  await expect(overlayaddaudio).toBeVisible();
  await expect(overlayaddaudio).toBeEnabled();

  const typecontent = page.getByRole('combobox');
  await expect(typecontent).toBeVisible();
  await expect(typecontent).toBeEnabled();
  await typecontent.selectOption('12000');
  
  const contentaddaudio = page.getByText('00:01:0627.01.26 11.01 - 13.');

  await contentaddaudio.scrollIntoViewIfNeeded();
  await expect(contentaddaudio).toBeVisible();
  await expect(contentaddaudio).toBeEnabled();

  const contentDrop = page.getByTestId('info-[object Object]').nth(2);
  await expect(contentDrop).toBeVisible({timeout:700});
  await expect(contentDrop).toBeEnabled();

  await contentaddaudio.dragTo(contentDrop);

  //Exit Overlay Add Audio
  const X= page.locator('.song-header > svg');
  await expect (X).toBeVisible();
  await expect(X).toBeEnabled();
  await X.click();

  const content1 = page.getByTestId('info-[object Object]').nth(2);
  await expect(content1).toBeVisible();
  await expect(content1).toBeEnabled();

  const linkmode = page.locator('.info_box.box2 > .info_box_container > .link-mode');
  await expect(linkmode).toBeVisible();
  await expect(linkmode).toBeEnabled();
  await linkmode.click();


  const player1 = page.locator('div').filter({ hasText: /^Player 1$/ }).first();
  await expect(player1).toBeVisible();
    await expect(player1).toBeEnabled();
  //FaderBefore play
  const faderDuration = page.getByText(':00.000:00.0').first();

  await content1.dragTo(player1);

  await page.waitForTimeout(7000);

  await page.keyboard.press('1');

  // VALIDASI: durasi berubah & bukan 00.000:00.0
    await expect(async () => {
    const durationText = (await faderDuration.textContent())?.trim();
    expect(durationText).not.toBe('00.000:00.0');
  }).toPass({
    timeout: 7000
  });

  await page.waitForTimeout(700);

  });