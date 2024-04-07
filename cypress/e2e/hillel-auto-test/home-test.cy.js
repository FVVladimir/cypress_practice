
describe("check the correct link to social chain, and button sign in and sign up", () => {

    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {

            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            }
        })
        // cy.url().should('eq', 'https://qauto.forstudy.space/')
    })

    it("check facebook link", () => {

        cy.get('a.socials_link').eq(0).invoke('attr', 'href').should('contain', 'facebook.com')

    })
    it("check telegram link", () => {

        cy.get('a.socials_link').eq(1).invoke('attr', 'href').should('contain', 't.me/ithillel_kyiv')

    })
    it("check youtube link", () => {

        cy.get('a.socials_link').eq(2).invoke('attr', 'href').should('contain', 'youtube.com')

    })
    it("check instagram link", () => {

        cy.get('a.socials_link').eq(3).invoke('attr', 'href').should('contain', 'instagram.com')

    })
    it("check linkedin link", () => {

        cy.get('a.socials_link').eq(4).invoke('attr', 'href').should('contain', 'linkedin.com')

    })
    it("check the sign in form open and visible", () => {

        cy.get('.header_signin').click()        
        cy.get('.modal-content').within(() => {
        cy.get('.modal-title').should("contain","Log in")
        
    })
    })
    it("check the sign up form open and visible", () => {

        cy.get('.hero-descriptor_btn').click()        
        cy.get('.modal-header').within(() => {
        cy.get('.modal-title').should("contain","Registration")
        })
    })
})   