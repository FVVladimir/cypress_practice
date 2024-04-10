describe("dropdown test", () => {

    // beforeEach() немає сенсу бо кожен тест окркма сторінка
    
    it(" 'Pleace select an option' is default value", () => {
          
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.get("option:nth-child(1)").should("have.text", "Please select an option")
    })
    it("choise option 2", () => {
          
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.get("#dropdown").select("Option 2").should("have.value", "2");//have.attr, selected чомусь не спрацьовуе
    })
})