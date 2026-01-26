import { test, expect } from '@playwright/test';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjA4NmVjMjdlLTRkYjctNDI5NC1hNmQ4LWY4NTg2YmYxMDdkMyJ9.eyJ1c2VyTGl2ZUlkIjoiMzlkMzJkNWItZTA3YS00NWE2LTkyYWUtMmExOTY3MTY2YTE5Iiwicm9vbUlEIjoiQlJNLUIzLUJSWCIsImNhbktpY2tVc2VyIjpmYWxzZSwibWljRmFkZXJJZCI6NSwibWljRmFkZXJMYWJlbCI6Ik5FVyIsImJpdFJhdGUiOjI1NjAwMCwibWljQWx3YXlzT24iOmZhbHNlLCJzZXJ2ZXJDb2RlIjoiQVdTLVNHLVNUQUdJTkciLCJuZXR3b3JrQ29kZSI6IkJSWCIsImFsbG93RmFkZXJDaGFuZ2UiOnRydWUsImlzU2VydmVyIjowLCJlY2hvQ29tcGVuc2F0aW9uRW5hYmxlIjpmYWxzZSwicmVvcmRlckZhZGVyIjpmYWxzZSwidGltZVpvbmUiOiJFdXJvcGUvQmVybGluIiwibmV0d29ya01vZGUiOmZhbHNlLCJhbHRlcm5hdGVWaWV3Ijp0cnVlLCJjb25uZWN0QnJpZGdlIjpmYWxzZSwicmFkaW9JbmZvcm1hdGlvbiI6W3sicmFkaW9OYW1lIjoiQnJpbGx1eCBSYWRpbyIsInJhZGlvSW1hZ2UiOiJodHRwczovL2RiMXF1NnN3eXFmNnguY2xvdWRmcm9udC5uZXQvYWZmaWxpYXRlcy9icmlsbHV4LXJhZGlvLnBuZyIsInJhZGlvQ29kZSI6IkJSTSIsImNoYW5uZWxJZCI6IjE1OTMiLCJuZXR3b3JrSWQiOiIxMTQiLCJmb3JtYXRJZCI6IjEifV0sImxvY2FsQ29kZSI6IkJSTSIsImlzX3NoaWZ0X2NoZWNrIjpmYWxzZSwianRpIjoiNDYyZGFlMzktOTQwYS00ZTY4LThiNDYtM2Q4M2YxNDA0ZDkxIiwiaWF0IjoxNzY5NDEzMDI5LCJleHAiOjE3NzAwMTc4Mjl9.mvEYCxMNFdJpyGG4LgX9YtQG0XtIalLVCubI_9xZe_67PNR42A5xQoOLGN1_PUBkUVZu7iDxa9xnqLj39KHG8-P_ZGQ8MiOJCuC1atXA3_AasYq535XZcQLhJxp0s5k6ahYl0GdL6L9AUkjG_oSiwZFYaKREFILuPNylbqGUlgTfgASnFMU5MvNdIrWrZIkapLicdw3WPURIWiPPtDyxyfMxJm2ZXpro1gVAkntSlKJgroU6sGujVtbX4_Kx96jPm5bguG06N16qOPlNvkdyRGVxu8l7b1_NMAi1eyikosLd6sz76zp8c6K_p25iN6cyVSi40XasBDGAWyU8N8RpVSRDZgI_VTFIsFpvCV5RncxK7Vfv0g5VZycB_RhzLw4wi3ZBAk9layUZJOsQ3N2jHKskVEvu59Zamr25yzpoDPp0hUxfuQCyQpYr7Bp6D9ixYLLrN36Itin12ZWPtJHNjvrpCL1VWN5X9ujDzYASeIh1H5SMxF_jwIeKQ7DGQJbOT9RHa84msoMiAB3D-YLAhQtd2d1_hIcVbzHXMEaNmBdT4DI_Om4P3LWREZjJLiyimxAK3NevJnls3P-0Vf54SvwU4uEqCiIJsQ4y_sA2YUZOWIhV6dDk5NKwS0NF0fEqveuzm_ii5s9ATxeiwjYpZovEVhQ90Kx9SfxTe4KXVJ8';

let pageCrashed = false;
let jsError = false;

test.beforeEach(async ({ page }) => {
     pageCrashed = false;
 jsError = false;

 page.on('crash', () => pageCrashed = true);
  page.on('pageerror', () => jsError = true);

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

await page.waitForTimeout(1000);

const Save = page.getByRole('button', { name: 'Save Settings' });
await expect(Save).toBeVisible();
await expect(Save).toBeEnabled();
await Save.click();

await page.mouse.click(10, 10);

//const PlaylistDatePicker = page.locator('.react-datepicker__input-container');
//await expect(PlaylistDatePicker).toBeVisible();
//await expect (PlaylistDatePicker).toBeEnabled();
//await PlaylistDatePicker.click();

//const scrollContainer = page.getByRole('dialog', { name: 'Choose Date and Time' });
//await expect(scrollContainer).toBeVisible();
//await expect (scrollContainer).toBeEnabled();


//const OptionDate =  page.getByRole('option', { name: 'Choose Thursday, January 29th,' });
//await expect(OptionDate).toBeVisible();
//await expect(OptionDate).toBeEnabled();
//await OptionDate.click();


//const OptionHour = page.getByRole('option', { name: '10', exact: true });
//await OptionHour.scrollIntoViewIfNeeded();
//aw/ait expect(OptionHour).toBeVisible();
//await expect(OptionHour).toBeEnabled();
//await OptionHour.click();

});

test('PlayoutManualMode', async ({ page }) =>  {

  //FaderBefore play
  const faderDuration = page.getByText(':00.000:00.0').first();

const content = page
  .getByTestId('info-[object Object]')
  .nth(2);

await expect(content).toBeVisible();
await expect(content).toBeEnabled();


const target = page.getByText(/^Player 1/);
await content.dragTo(target);



//const content2 = page
 // .getByTestId('info-[object Object]')
 // .nth(3);

//await expect(content2).toBeVisible();
//await expect(content2).toBeEnabled();


//const target2 = page.getByText(/^Player 2/);
//await content2.dragTo(target2);

// tekan keyboard 1
//await expect(target).toBeVisible();
//await expect(target2).toBeEnabled();


  await expect(target).toBeEnabled();
await target.click();
// fokus ke Player 1

await page.keyboard.press('1');

//await page.keyboard.press('2');

//expect(pageCrashed).toBe(false);
//expect(jsError).toBe(false);

await page.waitForTimeout(5000);


});

test('PlayoutHotkey', async ({ page }) =>  {

    const content = page
  .getByTestId('info-[object Object]')
  .nth(4);

await expect(content).toBeVisible({timeout:10000});
await expect(content).toBeEnabled();

const PresetHotkey1 = page.locator('div').filter({ hasText: /^Drag Here$/ }).nth(5);
await expect(PresetHotkey1).toBeVisible();
await expect(PresetHotkey1).toBeEnabled();



await content.dragTo(PresetHotkey1);

const hotkey1 = page.getByText('00:00:24Flight 5 _ Motiv').nth(1);
await hotkey1.click();

 await page.waitForTimeout(5000);

expect(pageCrashed).toBe(false);
expect(jsError).toBe(false);

});




test('PlayoutAutoMode', async ({ page }) =>  {

  const faderDuration = page.getByText(':00.000:00.0').first(); // sesuaikan dengan DOM asli



    const AutoPlayout = page.getByRole('button', { name: 'Auto' });
    await expect(AutoPlayout).toBeVisible();
    await expect(AutoPlayout).toBeEnabled();
    await AutoPlayout.click();

   // VALIDASI: durasi berubah & bukan 00.000:00.0
  await expect(async () => {
    const durationText = (await faderDuration.textContent())?.trim();
    expect(durationText).not.toBe('00.000:00.0');
  }).toPass({
    timeout: 15000
  });

 await page.waitForTimeout(5000);

expect(pageCrashed).toBe(false);
expect(jsError).toBe(false);

});




//const linkmode = page.locator('.info_box.box2 > .info_box_container > .link-mode');
//await expect(linkmode).toBeVisible();
//await expect(linkmode).toBeEnabled();
//await linkmode.click();

//const PresetHotkey1 = page.locator('div').filter({ hasText: /^Drag Here$/ }).nth(5);
//await expect(PresetHotkey1).toBeVisible();
//await expect(PresetHotkey1).toBeEnabled();

//await content.dragTo(PresetHotkey1);



