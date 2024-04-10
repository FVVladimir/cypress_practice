describe("checkbox test", () => {

    it("check is check 2 is default checked",() => {

        cy.visit(" https://the-internet.herokuapp.com/checkboxes");
        cy.get("input[type = \"checkbox\"")
    })
})