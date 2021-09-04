/**
 * Helper function so that it's easier to select elements within the app root shadow dom.
 *
 * For example, browser.$app(selector)[command](...args)
 */

browser.addCommand('$app', function (selector) {
  return $('.audi-feature-app-contact-fleet__shadow-host').shadow$(selector);
});

browser.addCommand('$$app', function (selector) {
  return $('.audi-feature-app-contact-fleet__shadow-host').shadow$$(selector);
});
