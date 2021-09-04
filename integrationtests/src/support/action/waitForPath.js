/**
 * Wait for the current path to match the given path
 *  @param  {String}  contain      Check whether path equals value or contains value
 *  @param  {String}  expectedPath The expected path to match against
 */
export default function (contain, expectedPath) {
  const getPath = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    browser
      .getUrl()
      .replace(/http(s?):\/\//, '')
      .replace(
        browser
          .getUrl()
          .replace(/http(s?):\/\//, '')
          .split('/')[0],
        ''
      );
  /**
   * Maximum number of milliseconds to wait for
   * @type {Int}
   */
  const ms = 5000;
  if (contain === 'becomes') {
    browser.waitUntil(
      () => getPath() === expectedPath,
      ms,
      `expected path to be "${expectedPath}" but found "${getPath()}"`
    );
  } else {
    browser.waitUntil(
      () => getPath().includes(expectedPath),
      ms,
      `expected "${getPath()}" to contain "${expectedPath}"`
    );
  }
}
