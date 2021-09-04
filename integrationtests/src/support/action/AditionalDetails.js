import contactFleet from '../../pageObjects/contactFleet.page';
/**
 * Fill in the Aditional Details section of the Contact Fleet Form
 * @param  {String}   size    The size of the fleet
 * @param  {String}   message Type custom message to be sent to the Fleet Team
 */
export default function (size, message) {
  if (size) {
    switch (size) {
      case '0-25':
        browser.$app(contactFleet.size1).click();
        break;
      case '25-100':
        browser.$app(contactFleet.size2).click();
        break;
      case '101-500':
        browser.$app(contactFleet.size3).click();
        break;
      case '500+':
        browser.$app(contactFleet.size4).click();
        break;
      case 'Not sure':
        browser.$app(contactFleet.size5).click();
        break;
    }
  }
  browser.$app(contactFleet.message).setValue(message);
}
