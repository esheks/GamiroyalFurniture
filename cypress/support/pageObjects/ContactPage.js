///<reference types="Cypress" />

class ContactPage
{

clickContact()
{
return cy.get('#menu-item-573 > .menu-link');
 
}
clickMenu()
{
return cy.get(':nth-child(1) > .ast-mobile-svg');
 
}

getName()
{
return cy.get('#wpforms-546-field_3');
 
}
getPhone()
{
return cy.get('#wpforms-546-field_4');
 
}
getEmail()
{
return cy.get('#wpforms-546-field_1');
 
}
getMessage()
{
return cy.get('#wpforms-546-field_5');
 
}
clickSubmit()
{
return cy.get('#wpforms-submit-546');
 
}

nameError()
{
    return cy.get('#wpforms-546-field_3-error')

}
phoneError()
{
    return cy.get('#wpforms-546-field_4-error')

}
emailError()
{
    return cy.get('#wpforms-546-field_1-error')

}


}

export default ContactPage;