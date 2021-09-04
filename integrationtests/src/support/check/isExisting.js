import getSelector from '../../pageObjects/page';

/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the element exists or not
 */
export default (selector, falseCase) => {
  /**
   * Elements found in the DOM
   * @type {Object}
   */
  const elements = browser.$$app(getSelector(selector));

  if (falseCase) {
    expect(elements).toHaveLength(0, `Expected element "${selector}" not to exist`);
  } else {
    expect(elements.length).toBeGreaterThan(0, `Expected element "${selector}" to exist`);
  }
};
