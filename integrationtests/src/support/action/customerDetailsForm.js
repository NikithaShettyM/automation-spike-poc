import contactFleet from '../../pageObjects/contactFleet.page';

/** Function to set the personal details of a form
 * @param {String} title Title
 * @param {String} firstName First name
 * @param {String} surname Last name
 * @param {String} emailConfirm Email confirmation
 * @param {String} email Email adress
 * @param {String} telephone Telephone number
 */
export default function (title, firstName, surname, email, telephone) {
  if (title) {
    switch (title) {
      case 'Mr':
        browser.$app(contactFleet.titleMr).click();
        break;
      case 'Mrs':
        browser.$app(contactFleet.titleMrs).click();
        break;
      case 'Miss':
        browser.$app(contactFleet.titleMiss).click();
        break;
      case 'Ms':
        browser.$app(contactFleet.titleMs).click();
        break;
    }
  }
  browser.$app(contactFleet.fName).setValue(firstName);
  browser.$app(contactFleet.lName).setValue(surname);
  browser.$app(contactFleet.email).setValue(email);
  if (telephone) {
    browser.$app(contactFleet.telephone).setValue(telephone);
  }
}
