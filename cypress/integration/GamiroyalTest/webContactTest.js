///<reference types="Cypress" />
import ContactPage from '../../support/pageObjects/ContactPage'

describe('My Contact page Test Suite', function() 
{
     //import page class 
     const contactPage=new ContactPage()
    
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
     

    it('Confirm text on contact page',function() {
    cy.title().should("includes", "Contact");
    cy.contains('Contact');
    cy.contains('SEND US A MESSAGE');
    cy.contains('Get In Touch');
    cy.contains('Business Hours');
    });
    
    it('Requires name in contact form',function() {
    contactPage.inputPhoneEmail(this.data.phone,this.data.email);//phone,email
    contactPage.elements.clickSubmit().click({force:true});//click submit
    contactPage.elements.errorName().should('have.text', this.data.expected)//assert tex
    });

    it('Requires phone in contact form',function() {
    contactPage.inputNameEmail(this.data.name, this.data.email);//name,email
    contactPage.elements.clickSubmit().click({force:true});//click submit
    contactPage.elements.errorPhone().should('have.text', this.data.expected)//assert text
    });

    it('Requires email in contact form',function() {
    contactPage.inputNamePhone(this.data.name, this.data.phone);//name,phone
    contactPage.elements.clickSubmit().click({force:true});//click submit
    contactPage.elements.errorEmail().should('have.text', this.data.expected)//assert text
    
    });

    it('Requires valid email in contact form',function() {
    contactPage.inputInvalidEmail(this.data.name, this.data.phone, this.data.invalidemail);//name,phone,invalidemail
    contactPage.elements.clickSubmit().click({force:true});//click submit
    contactPage.elements.errorEmail().should('have.text', this.data.expectInvalidEmail)//assert text
    });

    it('My ContactPage form positive Test case',function() {
    contactPage.inputValidData(this.data.name,this.data.phone,this.data.email,this.data.message);//name,phone,email,message
    //contactPage.elements.clickSubmit().click({force:true});//click submit
    });


});





