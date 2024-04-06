<reference type = "cypress"/>

describe('pass form testing', () => {
  it('right login wrong pass, check error massage', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("123456");
    cy.get("button[type = 'submit']").click();
    cy.get("#flash").should("have.text", '\n            Your password is invalid!\n            ×\n          ');
  });
  
  it('wrong login any password, check error massage', () => {
    cy.visit('https://the-internet.herokuapp.com/login',
    {
      auth:{
        username:"johnsmith",
        password:"12345"
      }   
     
    });    
    cy.get("button[type = 'submit']").click();
    cy.get("#flash").should("have.text", '\n            Your username is invalid!\n            ×\n          ');
  });
});