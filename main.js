// npm install testcafe
// node_modules\.bin\testcafe -b
// tc>node_modules\.bin\testcafe firefox,ie,edge,"path:`C:\Program Files\chrome-win\chrome.exe`" main.js --selector-timeout 60000

import Page from './page_model';
import {
    ClientFunction,
    Selector
} from 'testcafe';

import {
    AUTH_USERNAME,
    AUTH_PASSWORD
} from './auth.js'

const uri = 'https://teams.microsoft.com/';
const page = new Page();
const getWindowLocation = ClientFunction(() => window.location);

fixture('MSTeams').page(uri);

test('Test001', async t => {
    await t
        .setTestSpeed(page.setTestSpeed)
        // .click(page.useAppLnk)
        .typeText(page.usernameSelector, AUTH_USERNAME)
        .click(page.usernameButtonSelector)
        .typeText(page.passwordSelector, AUTH_PASSWORD)
        .click(page.passwordButtonSelector)
        .click(page.kmsiButtonSelector);

    await t.takeScreenshot({
        path: '001.png'
    });

    const location = await getWindowLocation();
    await t.expect(location.pathname).eql('/_');
});