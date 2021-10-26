///<reference types="Cypress" />

class ContactPage
{
    elements = {
        typeName: () => cy.get("#wpforms-546-field_3"),
        typePhone: () => cy.get('#wpforms-546-field_4'),
        typeEmail: () => cy.get('#wpforms-546-field_1'),
        typeInvalidEmail: () => cy.get('#wpforms-546-field_1'),
        typeMessage: () => cy.get("#wpforms-546-field_5"),
        errorName: () => cy.get('#wpforms-546-field_3-error'),
        errorPhone: () => cy.get('#wpforms-546-field_4-error'),
        errorEmail: () => cy.get('#wpforms-546-field_1-error'),
        clickContact:() => cy.get('#menu-item-573 > .menu-link'),
        clickMenu:() => cy.get(':nth-child(1) > .ast-mobile-svg'),
        clickSubmit:() => cy.get('#wpforms-submit-546'),
    
    }
    
    inputPhoneEmail(phone,email){
            this.elements.typePhone().type(phone);
            this.elements.typeEmail().type(email);
        }
    inputNameEmail(name,email){
            this.elements.typeName().type(name);
            this.elements.typeEmail().type(email);
        }
    inputNamePhone(name,phone){
            this.elements.typeName().type(name);
            this.elements.typePhone().type(phone);
        }
    inputInvalidEmail(name,phone,invalidemail){
            this.elements.typeName().type(name);
            this.elements.typePhone().type(phone);
            this.elements.typeInvalidEmail().type(invalidemail);
        }
    inputValidData(name,phone,email,message){
            this.elements.typeName().type(name);
            this.elements.typePhone().type(phone);
            this.elements.typeEmail().type(email);
            this.elements.typeMessage().type(message)
        }


}

export default ContactPage;