///<reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
describe('My HomePage Test Suite', function() 
{

    beforeEach(function() 
    {
        //WEBSITE TEST
        // runs once before all website tests in the block
        cy.fixture('example').then(function(data)
        {
           this.data=data
        })

        cy.visit(Cypress.env('url'))
        cy.viewport(1280, 720);
    })

     //import page class 
      const homePage=new HomePage()
      
it('Confirm text on home page',function() {
 //assert if  text is displayed correctly
homePage.getText()
cy.contains('GAMIROYAL');
cy.contains('FURNITURE');
cy.contains('Gamiroyal Furniture Warehouse.');
cy.contains('Make your home comfortable and beautiful with our furniture')
cy.contains('Search For Products');

});

it('Assert if search page column is 3 ',function() {
homePage.getSearchcolumn().should('have.length',3)
});

it('Click on sofa picture ',function() {
homePage.clicksofa().click();
});

it('Click on dining picture ',function() {
homePage.clickDining().click();
});


it('Click on bed picture ',function() {
homePage.clickBed().click();
cy.go('back')
cy.screenshot();
});


});





