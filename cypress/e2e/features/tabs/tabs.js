import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {HomePage} from "../../pageObjects/HomePage";

const homepage = new HomePage();

Given('user visits sky news website', function () {
    cy.visit(Cypress.config().baseUrl);

    cy.get(homepage.consentIframe).then(($iframe) => {
        const $body = $iframe.contents().find('body')
        cy.wrap($body)
            .find("button[title='Accept all']")
            .click();
    });
});

When('selected {string} tab', function (item) {
    cy.get(homepage.headerNav)
        .filter(`:contains("${item}")`)
        .should('be.visible')
        .click();
});

Then('tab title should have {string}', function (tabItem) {
    cy.get(homepage.tabTitle)
        .then(item => expect(item.text().trim()).to.eq(tabItem))
});

Then('user should see {int} categories', function (length) {
    cy.get(homepage.headerNav).should('have.lengthOf', length)
});

Then('the categories titles should match with', function (dataTable) {
    const titles = dataTable.rows();
    cy.get(homepage.headerNav).each((element, index, $list) => {
        expect(element.text().trim()).eq(titles[index][0]);
    })
});

Then('{string} tab should be selected', function (itemText) {
    cy.get(homepage.headerNav)
        .find('a')
        .should('have.length', 15)
        .each((element) => {
            const attrVal = element.attr('aria-current')
            if (attrVal === "true") {
                expect(element.text()).to.equal(itemText)
            }
        });
});

When('user click on site headline', function () {
    cy.get(homepage.headlineLink)
        .then(el => {
            cy.wrap(el.text().trim()).as('articleTitle')
        })
    cy.get(homepage.headlineLink).click();
});

Then('the title of the page should be the title of the selected article', function () {
    cy.get(homepage.articlePageTitle)
        .then(ele => {
            cy.get('@articleTitle').then(text =>
                expect(ele.text()).includes(text.split(" ", 1))
            )
        })
});