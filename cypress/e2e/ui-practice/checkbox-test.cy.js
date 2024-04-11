describe("checkbox test", () => {

   beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');
   })

    it("check is check 2 is default checked",() => {        
        cy.get("input[type = \"checkbox\"]").last().should("be.checked");
        cy.get("input[type = \"checkbox\"]").last().uncheck();
        cy.get("input[type = \"checkbox\"]").first().should("not.be.checked");
        cy.get("input[type = \"checkbox\"]").last().should("not.be.checked");
    })
    
    it("check the first checkbox, check both is checker", () => {
       cy.wait(2000)
       cy.get("input[type = \"checkbox\"]").first().check();
       cy.get("input[type = \"checkbox\"]").first().should("be.checked");
       cy.get("input[type = \"checkbox\"]").last().should("be.checked");
   
    })
})