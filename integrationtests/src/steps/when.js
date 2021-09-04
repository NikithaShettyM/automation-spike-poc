import clearInputField from '../support/action/clearInputField';
import clickElement from '../support/action/clickElement';
import closeLastOpenedWindow from '../support/action/closeLastOpenedWindow';
import aditionalDetails from '../support/action/AditionalDetails';
import customerType from '../support/action/CustomerType';
import customerDetailsForm from '../support/action/customerDetailsForm';
import deleteCookies from '../support/action/deleteCookies';
import dragElement from '../support/action/dragElement';
import focusLastOpenedWindow from '../support/action/focusLastOpenedWindow';
import handleModal from '../support/action/handleModal';
import loadingWheel from '../support/action/waitForLoadingWheel';
import moveTo from '../support/action/moveTo';
import pause from '../support/action/pause';
import pressButton from '../support/action/pressButton';
import scroll from '../support/action/scroll';
import selectOption from '../support/action/selectOption';
import selectOptionByIndex from '../support/action/selectOptionByIndex';
import setCookie from '../support/action/setCookie';
import setInputField from '../support/action/setInputField';

const { When } = require('@cucumber/cucumber');

When(/^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/, clickElement);

When(
  /^I set the( title to "([^"]*)?",)* firstName to "([^"]*)?", surname to "([^"]*)?", email to "([^"]*)?" and telephone to "([^"]*)?"$/,
  customerDetailsForm
);

When(
  /^I set the customer type to "([^"]*)?", the company name to "([^"]*)?" and the postal code to "([^"]*)?"$/,
  customerType
);

When(
  /^I set the fleet size to "([^"]*)?" and add the following message "([^"]*)?"$/,
  aditionalDetails
);

When(/^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/, setInputField);

When(/^I clear the inputfield "([^"]*)?"$/, clearInputField);

When(/^I drag element "([^"]*)?" to element "([^"]*)?"$/, dragElement);

When(/^I pause for (\d+)ms$/, pause);

When(/^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/, setCookie);

When(/^I delete the cookie "([^"]*)?"$/, deleteCookies);

When(/^I press "([^"]*)?"$/, pressButton);

When(/^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/, handleModal);

When(/^I scroll to element "([^"]*)?"$/, scroll);

When(/^I close the last opened (window|tab)$/, closeLastOpenedWindow);

When(/^I focus the last opened (window|tab)$/, focusLastOpenedWindow);

When(/^I wait for the "([^"]*)?" to disappear on the form$/, loadingWheel);

When(/^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/, selectOptionByIndex);

When(
  /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
  selectOption
);

When(/^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/, moveTo);
