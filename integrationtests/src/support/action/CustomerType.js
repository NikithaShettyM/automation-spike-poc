import contactFleet from '../../pageObjects/contactFleet.page';
/**
 * Fill in the Aditional Details section of the Contact Fleet Form
 * @param  {String}   customerType The customer type
 * @param  {String}   companyName  The company name
 * @param  {String}   postalCode    The post code of the company
 */
export default function (customerType, companyName, postalCode) {
  if (customerType) {
    switch (customerType) {
      case 'Company Car Driver':
        browser.$app(contactFleet.companyCarDriver).click();
        break;
      case 'Fleet Manager':
        browser.$app(contactFleet.fleetManager).click();
        break;
    }
  }
  browser.$app(contactFleet.companyName).setValue(companyName);
  browser.$app(contactFleet.postalCode).setValue(postalCode);
}
