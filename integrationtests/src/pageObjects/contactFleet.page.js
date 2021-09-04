const contactFleet = {
  //Objects required to fill the form- Your details section
  yourDetails:
    'div > div > div > div > div > div.audi-feature-app-contact-fleet__form > form > div.audi-feature-app-contact-fleet__form__bottom-container.audi-ui__forms__section__background__gray',
  titleMr:
    'div > div > div > div > div > div.audi-feature-app-contact-fleet__form > form > div.audi-feature-app-contact-fleet__form__bottom-container.audi-ui__forms__section__background__gray > div > div > div > fieldset > div:nth-child(1) > div > div > div > div:nth-child(1) > label',
  fName: '#forename',
  lName: '#surname',
  email: '#email',
  emailConfirm: '#email',
  telephone: '#telephone',

  //Objects required to fill the form- Customer type/ Fleet Size/ message sections
  companyCarDriver:
    'div > div > div > div > div > div.audi-feature-app-contact-fleet__form > form > div.audi-feature-app-contact-fleet__form__bottom-container.audi-ui__forms__section__background__white > div > div > div:nth-child(1) > fieldset > div:nth-child(1) > div > div > div > div:nth-child(1) > label',
  fleetManager:
    'div > div > div > div > div > div.audi-feature-app-contact-fleet__form > form > div.audi-feature-app-contact-fleet__form__bottom-container.audi-ui__forms__section__background__white > div > div > div:nth-child(1) > fieldset > div:nth-child(1) > div > div > div > div:nth-child(2) > label',
  companyName: '#company',
  postalCode: '#postCode',
  size1:
    'div > div > div > div > div > div.audi-feature-app-contact-fleet__form > form > div.audi-feature-app-contact-fleet__form__bottom-container.audi-ui__forms__section__background__white > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(1) > label',
  size2:
    'div > div > div > div > div > div.audi-feature-app-contact-fleet__form > form > div.audi-feature-app-contact-fleet__form__bottom-container.audi-ui__forms__section__background__white > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(4) > label',
  size3:
    'div > div > div > div > div > div.audi-feature-app-contact-fleet__form > form > div.audi-feature-app-contact-fleet__form__bottom-container.audi-ui__forms__section__background__white > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > label',
  size4:
    'div > div > div > div > div > div.audi-feature-app-contact-fleet__form > form > div.audi-feature-app-contact-fleet__form__bottom-container.audi-ui__forms__section__background__white > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(5) > label',
  size5:
    'div > div > div > div > div > div.audi-feature-app-contact-fleet__form > form > div.audi-feature-app-contact-fleet__form__bottom-container.audi-ui__forms__section__background__white > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(3) > label',
  message: '#message',

  //Objects required to submit the form
  register: '.audi-feature-app-contact-fleet__form__btn-submit',
  loadingWheel: '.bx--inline-loading__animation',

  //Objects required to verify the confirmation page
  thankYou: 'h2.audi-ui__content-title__element',
  description:
    'div > div > div > div > div > div > div.audi-ui__wrapper__confirmation__up-container > div > div > div > div > div.audi-ui__content-copy.audi-theme__light > div > p',
  modelConfigButton:
    'div > div > div > div > div > div > div.audi-ui__wrapper__confirmation__up-container > div > div > div > div > div.audi-ui__content-cta.audi-theme__light > div > a',
  clientName: '.audi-ui__forms__personal-details-sumary__name',
  clientEmail:
    'div > div > div > div > div > div > div.audi-ui__wrapper__confirmation__down-container > div > div > div > div > div > div > div.bx--offset-md-1.bx--col-md-5.audi-ui__forms__summary__holder > div > div:nth-child(3)',
  clientPhoneNo:
    'div > div > div > div > div > div > div.audi-ui__wrapper__confirmation__down-container > div > div > div > div > div > div > div.bx--offset-md-1.bx--col-md-5.audi-ui__forms__summary__holder > div > div:nth-child(4)',
  contactPhoneNo:
    'div > div > div > div > div > div > div.audi-ui__wrapper__confirmation__down-container > div > div > div > div > div > div > div:nth-child(2) > div > div > p:nth-child(1)',
};
module.exports = contactFleet;
