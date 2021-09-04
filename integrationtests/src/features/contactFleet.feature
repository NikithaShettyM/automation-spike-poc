@forms @contactFleet @leadsRegression
Feature: Verify that customers can sign up with the Contact Fleet form
    As a customer
    I want to be able to fill in all the fields of the Contact Fleet form
    so that I can submit it to Audi

    Scenario: Verify that I can fill in all the fields of the form and submit
        Given I open the Audi site "https://pre-www.audi.co.uk/uk/web/en/find-and-buy/business-and-fleet/contact-us.html#/"
        When I scroll to element "contactFleet.yourDetails"
        When I set the title to "Mr", firstName to "Marius", surname to "Teo", email to "eu@gmail.com" and telephone to "09859483829"
        And I set the customer type to "Fleet Manager", the company name to "IKEA" and the postal code to "AB101AH"
        And I set the fleet size to "101-500" and add the following message "I would like to know more about this model"
        And I click on the element "contactFleet.register"
        And I wait for the "contactFleet.loadingWheel" to disappear on the form
    
        
    Scenario: Verify that the details on the confirmation page is accurate
        Given that the path will contain "/confirmation"
        Then I expect that element "contactFleet.thankYou" becomes displayed
        And I expect that element "contactFleet.description" becomes displayed
        And I expect that element "contactFleet.modelConfigButton" becomes displayed
        And I expect that element "contactFleet.clientName" matches the text "Mr Marius Teo"
        And I expect that element "contactFleet.clientEmail" matches the text "eu@gmail.com"
        And I expect that element "contactFleet.clientPhoneNo" matches the text "09859483829"
        And I expect that element "contactFleet.contactPhoneNo" is displayed
