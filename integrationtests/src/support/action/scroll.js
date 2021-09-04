import getSelector from '../../pageObjects/page';

/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
export default (selector) => browser.$app(getSelector(selector)).scrollIntoView();
