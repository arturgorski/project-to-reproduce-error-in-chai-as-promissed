var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
var assert = chai.assert;

module.exports = function () {

    this.Given(/^I go on(?: the website)? "([^"]*)"$/, function (url, next) {
        browser.get(url);
        next();
    });

    this.Then(/the title should equal "([^"]*)"; \(expect\)$/, function (text, next) {
        expect(browser.getTitle()).to.eventually.equal(text).and.notify(next);
    });

    this.Then(/the title should equal "([^"]*)"; \(assert\)$/, function (text, next) {
        assert.eventually.equal(browser.getTitle(), text).notify(next);
    });
};
