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
clickMenuContact()
{
return cy.get
('.ast-mobile-header-content > .ast-builder-menu-1 > .ast-main-header-bar-alignment > .main-header-bar-navigation > #site-navigation > .main-navigation > #ast-hf-menu-1 > .menu-item-573 > .menu-link');
 
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