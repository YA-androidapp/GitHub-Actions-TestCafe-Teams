import {
  Selector
} from 'testcafe';

/*
  Page Object
 */
export default class Page {
  constructor() {
    // User App Link
    this.useAppLnk = Selector('.use-app-lnk');

    // i0116
    this.usernameSelector = Selector('#i0116');
    this.usernameButtonSelector = Selector('#idSIButton9');

    // i0118
    this.passwordSelector = Selector('#i0118');
    this.passwordButtonSelector = Selector('#idSIButton9');

    // kmsi
    this.kmsiButtonSelector = Selector('#idSIButton9');

    this.nameSelector = Selector('#developer-name');
    this.submitSelector = Selector('#submit-button');
    this.thanksMessage = Selector('#article-header');
    this.errorMessage = Selector('.errorMessage');
    this.backSelector = Selector('.back');
    this.setTestSpeed = 0.5;
  }
}