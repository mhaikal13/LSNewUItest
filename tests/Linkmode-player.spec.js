import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjNmYWQ1NzVlLWQzNDItNDMyNS1hMWNiLWJlOTcxN2NkMjRlNCJ9.eyJyb29tSUQiOiJCUk0tQjEtQlJYIiwiY2FuS2lja1VzZXIiOmZhbHNlLCJtaWNGYWRlcklkIjo2LCJtaWNGYWRlckxhYmVsIjoiUkIiLCJiaXRSYXRlIjoyNTYwMDAsIm1pY0Fsd2F5c09uIjpmYWxzZSwic2VydmVyQ29kZSI6IkFXUy1TRy1TVEFHSU5HIiwibmV0d29ya0NvZGUiOiJCUlgiLCJhbGxvd0ZhZGVyQ2hhbmdlIjp0cnVlLCJpc1NlcnZlciI6MCwiZWNob0NvbXBlbnNhdGlvbkVuYWJsZSI6ZmFsc2UsInRpbWVab25lIjoiRXVyb3BlL0JlcmxpbiIsImFsdGVybmF0ZVZpZXciOnRydWUsImNvbm5lY3RCcmlkZ2UiOmZhbHNlLCJyYWRpb0luZm9ybWF0aW9uIjpbeyJyYWRpb05hbWUiOiJCcmlsbHV4IFJhZGlvIiwicmFkaW9JbWFnZSI6Imh0dHBzOi8vZGIxcXU2c3d5cWY2eC5jbG91ZGZyb250Lm5ldC9hZmZpbGlhdGVzL2JyaWxsdXgtcmFkaW8ucG5nIiwicmFkaW9Db2RlIjoiQlJNIiwiY2hhbm5lbElkIjoiMTU5MyIsIm5ldHdvcmtJZCI6IjExNCIsImZvcm1hdElkIjoiMSJ9XSwibG9jYWxDb2RlIjoiQlJNIiwiaXNfc2hpZnRfY2hlY2siOmZhbHNlLCJqdGkiOiIzOTRhZDliMi1lMGQ1LTQyNTQtOGM1YS03MTg3MDNlY2E2NDUiLCJpYXQiOjE3NTg1MzAzNDEsImV4cCI6MTgxMDM3MDM0MX0.mronKsJi0qo3Ua2_c_eMDQkJZFialOiUhcRiLjd509HD9PpNkV9xA8sdPIAYApxpihwqpFON_SGEEqrt7zfFAXSrdcLOQn7cajq5rQ7r-tKf9cqyaJ3OB56t_V_vquLGAH5xVmWv2VMWgCVRq99aEYnh-XW1B_dnXy2it-q8KDf9Ydmv14eWFCeJhzFAK-ki1FimpYQjL2pqOYHW4GSw9ecI28JkZPpgEUPeEAIj5FzVB9BomnaQ_frFJokSKgOsER_PvJh-V8EmkfyMttTHbzSa9vR4RVlZgn6z1SHcxzx681jZl61yEtZjsfmWf7JPJVo2Mea8PRaM8WxC7fjra6Uqb9ZcYjedy2u95ZxOlgVgvSw1fzzFJUlnzQmT63oXMrDUZNKCv5_QXNW8vZ5p2rnhGQGAtavTNHhNlbNuGCzd0rSh5kcDkbzQpUK4vO3AbLCPR0qMC5ohQT28LtW9N8agHe3S2IkMc-rFBuk16_XESiwziIRnXs0_ArbHayUcew73xYo3ipBRIlfX6hepfiFpb9G01HyPAIxRxHM0zoH7gNwfnxiL7T1pDJPuB8nwyXx-l2qWg14_9KZZ5g00tUpid4rsG_4-D2MF7vzE61ZgmrAuyFL378Ft0h5ZrGqnbbd5YrkQMcpWtIWcPLYx1e_fBiYRPlaEfSEEdIeQ76g');


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

await page.mouse.click(10, 10);



});

test('BUG LINK MODE', async ({ page }) =>  {

   //FaderBefore play
const faderDuration = page.getByText(':00.000:00.0').first();

  
  const playlist = page.getByTestId('info-[object Object]').nth(2);
  await expect(playlist).toBeVisible();
  await expect(playlist).toBeEnabled();
  
  
  const addaudio = page.locator('.header-playlist > div:nth-child(3)');
  await expect(addaudio).toBeVisible();
  await expect (addaudio).toBeEnabled();
  await addaudio.click();
  
  
  const overlayaddaudio = page.getByText('Add Audio---all---');
  await expect(overlayaddaudio).toBeVisible();
  await expect(overlayaddaudio).toBeEnabled();
  
  const typecontent = page.getByRole('combobox');
  await expect(typecontent).toBeVisible();
  await expect(typecontent).toBeEnabled();
  await typecontent.selectOption('12000');
  
   
  const contentaddaudio = page.getByText('00:01:0126.01.26 07.01 - 09.');
  
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
  
  //const linkmode = page.locator('.info_box.box2 > .info_box_container > .link-mode');
  //await expect(linkmode).toBeVisible();
  //await expect(linkmode).toBeEnabled();
  //await linkmode.click();

 
  
  const player1 = page.getByText(/^Player 1/);
  await content1.dragTo(player1);
  
// VALIDASI: durasi berubah & bukan 00.000:00.0
    await expect(async () => {
      const durationText = (await faderDuration.textContent())?.trim();
      expect(durationText).not.toBe('00.000:00.0');
    }).toPass({
      timeout: 15000
    });

  // tekan keyboard 1
  //await expect(target).toBeVisible();
  await expect(player1).toBeEnabled();
  
  
    
  await player1.click(); 
  // fokus ke Player 1
  await page.keyboard.press('1');

  await page.waitForTimeout(5000);

  
  });