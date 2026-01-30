import { test, expect } from '@playwright/test';
import  {ButtonOK}  from './selectors.js';
import {playerByRole } from './selectors.js';
import {playlistItemByIndex} from './selectors.js';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjhhNzliODI3LTI1Y2QtNDc4Mi05MDcxLTc0MGIxYWZjNzJmYSJ9.eyJ1c2VyTGl2ZUlkIjoiYjMzNGIyOWUtNmMwZi00ZTNhLWEzNDEtMWJjMDQ4MDAwY2JlIiwicm9vbUlEIjoiRlJCLUIxLUJXRSIsImNhbktpY2tVc2VyIjpmYWxzZSwibWljRmFkZXJJZCI6NiwibWljRmFkZXJMYWJlbCI6IlRFU1QiLCJiaXRSYXRlIjoyNTYwMDAsIm1pY0Fsd2F5c09uIjpmYWxzZSwic2VydmVyQ29kZSI6IkFXUy1JRC1KS1QiLCJuZXR3b3JrQ29kZSI6IkJXRSIsImFsbG93RmFkZXJDaGFuZ2UiOnRydWUsImlzU2VydmVyIjowLCJlY2hvQ29tcGVuc2F0aW9uRW5hYmxlIjpmYWxzZSwicmVvcmRlckZhZGVyIjpmYWxzZSwidGltZVpvbmUiOiJFdXJvcGUvQmVybGluIiwibmV0d29ya01vZGUiOmZhbHNlLCJhbHRlcm5hdGVWaWV3Ijp0cnVlLCJjb25uZWN0QnJpZGdlIjpmYWxzZSwicmFkaW9JbmZvcm1hdGlvbiI6W3sicmFkaW9OYW1lIjoiQmF5ZXJud2VsbGUiLCJyYWRpb0ltYWdlIjoiaHR0cHM6Ly9kYjFxdTZzd3lxZjZ4LmNsb3VkZnJvbnQubmV0L2FmZmlsaWF0ZXMvYndlLnN2ZyIsInJhZGlvQ29kZSI6IkZSQiIsImNoYW5uZWxJZCI6IjU2MyIsIm5ldHdvcmtJZCI6IjYwIiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJGUkIiLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6IjhjNzAwNGVmLWU3MTktNGNlMS1iM2JkLWZhZmY4MGVlYjg2ZCIsImlhdCI6MTc2OTY3MDgzMCwiZXhwIjoxODIxNTEwODMwfQ.HTwl3vwJ1Ti-MGc_OtCalDlO2P6NZbCIG6Z54aI_fIFw_6BkfSPYLgvWMgDUtASA9VFQBFEtWcaNPffFEocdgJnBQ_s45qkUR1M4mKP0Qx9x9DLpay6pRc7sA-XnKmmFQR9I305--kCQnmlkZMUMh549kmx7fAbrMDyBq4X113mOdxCMvkfXChem0OQXDKfWjaLaXHL2cgPGD6QgPOM_BWROKtJCbtN8y_z9Lf6n1PcssyRlwuMXwY8fgcMd91f_Drarp5b4MgWxByDrMcw9Tk4ptxeaQD6nu6gjjL4Agb1GTkY4w_fxh3fX4TPSJRZjtvajvfB8w0MFOt-ax39bQoK2bzGH1TH6sFqZfPPf715E-BBTTdBnG0jWq9SoSDcOKb7IY1x-TKXwWfFEN6PGcrrbCgyLQzssUMdPPSZQqXsEDBQGGh4E_dR0kyxfc9SrgTiusRoEPjLJGALrIsDUzcPC9GVV4wGuPE0J8qWVUyqOJsKqJ8vJYofFzYoRUzfuQ5kJaTsjp84naH_kDcc4OA2dKdqDcSUY5zy9IWlPCBc0ZqX83s2D5QMyfC7dixR10-yhTdXmLkq-CHXBl0egKZHF0B-RMDZLWFZF-m1lVbbF6yTw2fg-W9Lk0bH7xk1LEvT4ywWoO9OMTBr6OtW5crErDGaQ7EjBfnAxxyBLoFc';


test.beforeEach(async ({ page }) => {
   
    await page.goto(URL);

  const okButton = page.locator(ButtonOK());
  await expect (okButton).toBeVisible();
  await expect(okButton).toBeEnabled();
  await okButton.click();

  const Player1 = page.locator(playerByRole('player1'));
  await expect(Player1).toBeVisible();
  await expect(Player1).toBeEnabled();

  const Player2 = page.locator(playerByRole('player2'));
  await expect(Player2).toBeVisible();
  await expect(Player2).toBeEnabled();

  const Player3 = page.locator(playerByRole('player3'));
  await expect(Player3).toBeVisible();
  await expect(Player3).toBeEnabled();

});

test('LiveStudio CHECK PLAYER', async ({ page }) =>  {



const playlistItem1 = page.locator(playlistItemByIndex(7)).first();
await expect(playlistItem1).toBeVisible();
await expect(playlistItem1).toBeEnabled();

const playerByrole = page.locator(playerByRole('player1'));
await expect(playerByrole).toBeVisible();
await expect(playerByrole).toBeEnabled();

await playlistItem1.dragTo(playerByrole);

await page.waitForTimeout(1000);

});

