import checkIfElementExists from '../lib/checkIfElementExists';
import getSelector from '../../pageObjects/page';

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
export default (action, type, selector) => {
  /**
   * Element to perform the action on
   * @type {String}
   */
  const elem = type === 'link' ? `=${selector}` : getSelector(selector);

  checkIfElementExists(elem);

  if (action === 'click') browser.$app(elem).click();
  else browser.$app(elem).doubleClick();
};
