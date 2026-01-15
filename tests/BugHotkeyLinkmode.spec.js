import { test, expect } from '@playwright/test';



test('testBugHotkeyLinkmode', async ({ page }) => {
let pageCrashed = false;
let jsError = false;

page.on('crash', () => {
  pageCrashed = true;
});

page.on('pageerror', (err) => {
  jsError = true;
  console.error(err.message);
});


await page.goto('http://localhost:3000/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjdkN2RhNGZjLWNhNDgtNGY4OS04ZTQ0LWUwNjlmMjI4NWIzYiJ9.eyJ1c2VyTGl2ZUlkIjoiZmI1NDZjNGUtZmQ4OS00MjY2LWFiODItMTBhMGRhYjAxNzU1Iiwicm9vbUlEIjoiTllYLU0xLUFXRS1SRUMiLCJjYW5LaWNrVXNlciI6dHJ1ZSwibWljRmFkZXJJZCI6NCwibWljRmFkZXJMYWJlbCI6IkhpbG1hbiIsImJpdFJhdGUiOjI1NjAwMCwibWljQWx3YXlzT24iOmZhbHNlLCJzZXJ2ZXJDb2RlIjoiQVdTLVVTLU9ISSIsIm5ldHdvcmtDb2RlIjoiQVdFIiwiYWxsb3dGYWRlckNoYW5nZSI6dHJ1ZSwiaXNTZXJ2ZXIiOjAsImVjaG9Db21wZW5zYXRpb25FbmFibGUiOmZhbHNlLCJyZW9yZGVyRmFkZXIiOmZhbHNlLCJ0aW1lWm9uZSI6IkFtZXJpY2EvTmV3X1lvcmsiLCJuZXR3b3JrTW9kZSI6ZmFsc2UsInN0b3JhZ2VQcm92aWRlciI6IkFXUyIsInN0b3JhZ2VCYXNlRGlyIjoib2hpLXMzYi1scy1saXZlLXJlY29yZGluZy1hdWRpby9SQVcvQVdFL05ZWCIsInJlZ2lvbiI6InVzLWVhc3QtMiIsImZpbGVOYW1lIjoiQVdFLU5ZWC0yMDI2LTAxLTE0LTEwMDYzMC53ZWJtIiwiY2FsbEJhY2tMaW5rIjoiaHR0cHM6Ly9icmlkZ2luZy5yYWRpby5jbG91ZC9saXZlX3JlY29yZGluZ19kb25lP2ZpbGVuYW1lPUFXRS1OWVgtMjAyNi0wMS0xNC0xMDA2MzAud2VibSIsInJlY29yZExhYmVsIjoiVlQgQVdFIDE0LTAxIiwiY29ubmVjdEJyaWRnZSI6ZmFsc2UsInJhZGlvSW5mb3JtYXRpb24iOlt7InJhZGlvTmFtZSI6IkFXUyBSQyBFeHBvIiwicmFkaW9JbWFnZSI6Imh0dHBzOi8vZGIxcXU2c3d5cWY2eC5jbG91ZGZyb250Lm5ldC9hZmZpbGlhdGVzL2F3ZS5zdmciLCJyYWRpb0NvZGUiOiJOWVgiLCJjaGFubmVsSWQiOiI0NjgiLCJuZXR3b3JrSWQiOiI1NSIsImZvcm1hdElkIjoiMSJ9XSwibG9jYWxDb2RlIjoiTllYIiwiaXNfc2hpZnRfY2hlY2siOmZhbHNlLCJqdGkiOiJiNzBlZTk4YS1kMDFiLTRlNWQtYjg3ZC0zMDEyZTE0ZWUxNzEiLCJpYXQiOjE3NjgzNTk5OTEsImV4cCI6MTc3MDk1MTk5MX0.Idad4lRXLPmtET_gTeYnyFDHJFK5zLONNXDXXo7-tRYHcr5Gp6STOLOHzoqOw493YdhIlD2nvnfleE5-LfEoxVk8wjdELt1Arnfz281dEjG5K8tOkz2PGvtomPvA5bpYUSwyaVX1A2ya6Hf0mAsU0tr-v0osXmDUY5jmXkyLFulzzhgHxG3is4zk0TrZ7Y99M_DqsgPRrWS7pCA56f0BoCVpJ7rqwC-u_U4Y1pNorJox_CH85Ay7_TgUvTLncmz_6VCL6vpw0VMXSxrzFaiYXT4Jda3LPw-HLFf9Owi992MKM5Twfn-7SMiJ2qwDN0yN8P79YCPCprotUN7ioAWOSt9NX-3JGnU5zpChh1cBrdoP_OeXZ-z2OHTr2sWbVwlt7b4BS62P0gNtI7Hae3gR_u_MULgJQ0lQ5tN67qvSHtpqW0mKFyQUKVMvXEjOFUMFrEjtjJMHHdWF5cvVHD_SZbxnGG-AS0btuI1dNu5pN0Elol3QRlIP8OJnGpKUzqPOqeZkFJ4iWY-oCoMPzGYijLqspJzB4yfkl-Cu68zml0ZqOqRqSp4DrHT6EUSxRJWrC3TCHn3EaFmXw9b6G-HKm2ZqURgO8hfoE1DLKptgspCoYGgJKvS87PRtk4Qbg48iLDBelui40qDGo23bkJjAoQ1-EM9xiCM14qJZ_jtVZWU');

const  okButton = page.getByRole('button', { name: 'OK' });

await expect (okButton).toBeVisible();
await expect(okButton).toBeEnabled();
await okButton.click();

const content = page
  .getByTestId('info-[object Object]')
  .nth(3);

await expect(content).toBeVisible();
await expect(content).toBeEnabled();



const target = page.getByText('hotkey 100:00.000:00.0+100-10');

await expect(content).toBeVisible();
await expect(content).toBeEnabled();
await content.dragTo(target);


const Linkmode = page.locator('.info_box.box3 > .info_box_container > .link-mode');

await expect(Linkmode).toBeVisible();
await expect(Linkmode).toBeEnabled();
await Linkmode.click();


const ON = page.getByRole('button', { name: 'OFF' }).nth(3);
await expect(ON).toBeVisible();
await expect(ON).toBeEnabled();
await ON.click();


const OFF = page.getByRole('button', { name: 'ON' });
await expect(OFF).toBeVisible();
await expect(OFF).toBeEnabled();
await OFF.click();

expect(pageCrashed).toBe(true);
expect(jsError).toBe(true);


});