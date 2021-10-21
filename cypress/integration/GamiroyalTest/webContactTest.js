///<reference types="Cypress" />
import ContactPage from '../../support/pageObjects/ContactPage'

describe('My Contact page Test Suite', function() 
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
        cy.contains('Contact').click({force: true});
    })
     
    //import page class 
     const contactPage=new ContactPage()

    it('Confirm text on contact page',function() {
    cy.title().should("eq", "Contact -");
    cy.contains('Contact');
    cy.contains('SEND US A MESSAGE');
    cy.contains('Get In Touch');
    cy.contains('Business Hours');
    });
    
    it('Requires name in contact form',function() {
    contactPage.getPhone().type(this.data.phone);//phone
    contactPage.getEmail().type(this.data.email);//email
    contactPage.clickSubmit().click({force:true});//click submit
    contactPage.nameError().should('have.text','This field is required.')//assert text
    });

    it('Requires phone in contact form',function() {
    contactPage.getName().type(this.data.name);//name
    contactPage.getEmail().type(this.data.email);//email
    contactPage.clickSubmit().click({force:true});// click submit
    contactPage.phoneError().should('have.text','This field is required.')//assert text
    });

    it('Requires email in contact form',function() {
    contactPage.getName().type(this.data.name);//name
    contactPage.getPhone().type(this.data.phone);//phone
    contactPage.clickSubmit().click({force:true});//click submit
    contactPage.emailError().should('have.text','This field is required.')//assert text
    });



    it('Requires valid email in contact form',function() {
    contactPage.getName().type(this.data.name);//name
    contactPage.getPhone().type(this.data.phone);//phone
    contactPage.getEmail().type(this.data.invalidemail);// invalid email
    contactPage.getMessage().type(this.data.message)//message
    contactPage.clickSubmit().click({force:true});//click submit
    contactPage.emailError().should('have.text','Please enter a valid email address.')//assert text
    });

    it('My ContactPage form positive Test case',function() {
    contactPage.getName().type(this.data.name);//name
    contactPage.getPhone().type(this.data.phone);//phone
    contactPage.getEmail().type(this.data.email);// valid email
    contactPage.getMessage().type(this.data.message)// message
    contactPage.clickSubmit().click()//click submit
    cy.screenshot();
    });


});





