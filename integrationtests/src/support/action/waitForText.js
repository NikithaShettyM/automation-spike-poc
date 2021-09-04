import getSelector from '../../pageObjects/page';
/**
 * Check if the current text matches the given text
 *  @param  {String}  element The element to check
 *  @param  {String}  expectedText The expected text to match against
 */
export default function waitForText(element, expectedText) {
  /**
   * Maximum number of milliseconds to wait for
   * @type {Int}
   */
  const ms = 10000;
  browser.waitUntil(
    () => browser.$app(getSelector(element)).getText().includes(expectedText),
    ms,
    `expected element "${element}" to contain text ` +
      `"${expectedText}", but found "${browser.$app(getSelector(element)).getText()}"`
  );
}
