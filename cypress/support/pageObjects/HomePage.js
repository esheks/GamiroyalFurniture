class HomePage
{

getText()
{
cy.get('.elementor-element-74d36843 > .elementor-widget-container > .elementor-heading-title').should('have.text','GAMIROYAL');


cy.get('.elementor-element-ffa1734 > .elementor-widget-container > .elementor-heading-title').should('have.text','FURNITURE');

cy.get('.elementor-element-25666558 > .elementor-widget-container > .elementor-heading-title')
.should('have.text','Gamiroyal Furniture Warehouse.\n');

cy.get('.elementor-element-7a0fcd4 > .elementor-widget-container > .elementor-heading-title')
.should('have.text','Make your home comfortable and beautiful with our furniture');

cy.get('.elementor-element-3d091f4 > .elementor-widget-container > .elementor-heading-title')
.should('have.text','Search For Products');
return this; 
}


    
getSearchcolumn()
{ 
return cy.get('[class="elementor-container elementor-column-gap-default"]')//home
}


clicksofa()
{
return cy.get('.wp-caption > a > .elementor-animation-bounce-in');
}

clickDining()
{
return cy.get('.elementor-element-d608445 > .elementor-widget-container > a > .elementor-animation-bounce-in');
}

clickBed()
{
return cy.get('.elementor-element-3f6027b > .elementor-widget-container > a > .elementor-animation-bounce-in'); 
}



 }

export default HomePage;
