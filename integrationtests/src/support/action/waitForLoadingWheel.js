import getSelector from '../../pageObjects/page';

/**
 * selector is the loading wheel
 * @param  {String}   selector Element selector
 */
export default (selector) =>
  browser.$app(getSelector(selector)).waitForDisplayed({ reverse: true });
