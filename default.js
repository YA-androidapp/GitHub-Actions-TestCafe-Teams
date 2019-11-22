import Page from './page_model';
import {
    ClientFunction,
    Selector
} from 'testcafe';

const page = new Page();
const getWindowLocation = ClientFunction(() => window.location);

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('テスト001', async t => {
    await t
        .setTestSpeed(page.setTestSpeed)
        .setNativeDialogHandler(() => true)
        .typeText(page.nameSelector, 'John Smith')
        .click(page.submitSelector)

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector(page.thanksMessage).innerText).eql('Thank you, John Smith!');
});