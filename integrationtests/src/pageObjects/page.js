/* eslint @typescript-eslint/no-unused-vars: "off" */
const contactFleet = require('./contactFleet.page');

/**
 * Import all pageObject files
 *
 * e.g. const bookATD = require('./bookATestDrive.page');
 */

/**
 * Calls all page object files
 * @param  {String}   elem    get the element
 * @returns {String} returns value
 */
function getSelector(elem) {
  try {
    // eslint-disable-next-line
    return eval(elem);
  } catch (error) {
    return elem;
  }
}

module.exports = getSelector;
