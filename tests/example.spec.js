import { test, expect } from '@playwright/test';
import  {ButtonOK, playerTitleText, timerInPlayer, playerByRole, playlistItemByIndex, settingsButton, settingsSaveButton, playerElapsedTime}  from './selectors.js';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjhhNzliODI3LTI1Y2QtNDc4Mi05MDcxLTc0MGIxYWZjNzJmYSJ9.eyJ1c2VyTGl2ZUlkIjoiYjMzNGIyOWUtNmMwZi00ZTNhLWEzNDEtMWJjMDQ4MDAwY2JlIiwicm9vbUlEIjoiRlJCLUIxLUJXRSIsImNhbktpY2tVc2VyIjpmYWxzZSwibWljRmFkZXJJZCI6NiwibWljRmFkZXJMYWJlbCI6IlRFU1QiLCJiaXRSYXRlIjoyNTYwMDAsIm1pY0Fsd2F5c09uIjpmYWxzZSwic2VydmVyQ29kZSI6IkFXUy1JRC1KS1QiLCJuZXR3b3JrQ29kZSI6IkJXRSIsImFsbG93RmFkZXJDaGFuZ2UiOnRydWUsImlzU2VydmVyIjowLCJlY2hvQ29tcGVuc2F0aW9uRW5hYmxlIjpmYWxzZSwicmVvcmRlckZhZGVyIjpmYWxzZSwidGltZVpvbmUiOiJFdXJvcGUvQmVybGluIiwibmV0d29ya01vZGUiOmZhbHNlLCJhbHRlcm5hdGVWaWV3Ijp0cnVlLCJjb25uZWN0QnJpZGdlIjpmYWxzZSwicmFkaW9JbmZvcm1hdGlvbiI6W3sicmFkaW9OYW1lIjoiQmF5ZXJud2VsbGUiLCJyYWRpb0ltYWdlIjoiaHR0cHM6Ly9kYjFxdTZzd3lxZjZ4LmNsb3VkZnJvbnQubmV0L2FmZmlsaWF0ZXMvYndlLnN2ZyIsInJhZGlvQ29kZSI6IkZSQiIsImNoYW5uZWxJZCI6IjU2MyIsIm5ldHdvcmtJZCI6IjYwIiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJGUkIiLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6IjhjNzAwNGVmLWU3MTktNGNlMS1iM2JkLWZhZmY4MGVlYjg2ZCIsImlhdCI6MTc2OTY3MDgzMCwiZXhwIjoxODIxNTEwODMwfQ.HTwl3vwJ1Ti-MGc_OtCalDlO2P6NZbCIG6Z54aI_fIFw_6BkfSPYLgvWMgDUtASA9VFQBFEtWcaNPffFEocdgJnBQ_s45qkUR1M4mKP0Qx9x9DLpay6pRc7sA-XnKmmFQR9I305--kCQnmlkZMUMh549kmx7fAbrMDyBq4X113mOdxCMvkfXChem0OQXDKfWjaLaXHL2cgPGD6QgPOM_BWROKtJCbtN8y_z9Lf6n1PcssyRlwuMXwY8fgcMd91f_Drarp5b4MgWxByDrMcw9Tk4ptxeaQD6nu6gjjL4Agb1GTkY4w_fxh3fX4TPSJRZjtvajvfB8w0MFOt-ax39bQoK2bzGH1TH6sFqZfPPf715E-BBTTdBnG0jWq9SoSDcOKb7IY1x-TKXwWfFEN6PGcrrbCgyLQzssUMdPPSZQqXsEDBQGGh4E_dR0kyxfc9SrgTiusRoEPjLJGALrIsDUzcPC9GVV4wGuPE0J8qWVUyqOJsKqJ8vJYofFzYoRUzfuQ5kJaTsjp84naH_kDcc4OA2dKdqDcSUY5zy9IWlPCBc0ZqX83s2D5QMyfC7dixR10-yhTdXmLkq-CHXBl0egKZHF0B-RMDZLWFZF-m1lVbbF6yTw2fg-W9Lk0bH7xk1LEvT4ywWoO9OMTBr6OtW5crErDGaQ7EjBfnAxxyBLoFc';


test.beforeEach(async ({ page }) => {
   
    await page.goto(URL);

  const okButton = page.locator(ButtonOK());
  await expect (okButton).toBeVisible({ timeout: 10000 });
  await expect(okButton).toBeEnabled();
  await okButton.click();


  const settingsBtn = page.locator(settingsButton());
  await expect(settingsBtn).toBeVisible();
  await expect(settingsBtn).toBeEnabled();
  await settingsBtn.click();

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

const Save = page.locator(settingsSaveButton());
await expect(Save).toBeVisible();
await expect(Save).toBeEnabled();
await Save.click();

await page.waitForTimeout(6000);
  await page.keyboard.press('Escape');


});

test('LiveStudio CHECK PLAYER', async ({ page }) =>  {


const playlistItem1 = page.locator(playlistItemByIndex()).nth(7);
await playlistItem1.scrollIntoViewIfNeeded();
await expect(playlistItem1).toBeVisible();
await expect(playlistItem1).toBeEnabled();


const playerByrole2 = page.locator(playerByRole('player2'));
await expect(playerByrole2).toBeVisible();
await expect(playerByrole2).toBeEnabled({ timeout: 10000 });

await playlistItem1.dragTo(playerByrole2); 

await page.waitForTimeout(7000);  

// Ensure page has focus before pressing keyboard
await page.click('body');
await page.waitForTimeout(700);

// Press key 2
await page.keyboard.press('2');
console.log('---------------------------player 2 started--------------------------');


await page.waitForTimeout(16000);

  const playerByrole = page.locator(playerByRole('player1'));
await expect(playerByrole).toBeVisible();
await expect(playerByrole).toBeEnabled({ timeout: 10000 });

  const playlistItem2 = page.locator(playlistItemByIndex()).nth(3);
await playlistItem2 .scrollIntoViewIfNeeded();
await expect (playlistItem2).toBeVisible();
await expect(playlistItem2).toBeEnabled();

await playlistItem2 .dragTo(playerByrole); 
console.log('Drag and Drop Content to Player1'); 
await page.waitForTimeout(7000);  

// Ensure page has focus before pressing keyboard

// Press key 1
await page.keyboard.press('1');
console.log('✓ Key 1 pressed');


await page.waitForTimeout(60000);

  await page.close();

});
