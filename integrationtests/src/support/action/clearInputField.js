import getSelector from '../../pageObjects/page';

/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector
 */
export default (selector) => {
  browser.$app(getSelector(selector)).clearValue();
};
