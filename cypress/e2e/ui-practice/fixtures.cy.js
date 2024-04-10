

// import userData from "../../fixtures/credentials.json";

describe('fixtures test', () => {

        it("first test", () => {
            cy.visit('https://qauto.forstudy.space', {
                auth: {
                    username: 'guest',
                    password: 'welcome2qauto',
                },
            });
    
            cy.fixture('credentials.json').then((userData) => {
                cy.contains('Sign In').click();
                cy.get('h4.modal-title').should('be.visible');
                cy.get('input#signinEmail').type(userData.name);
                cy.get('input#signinPassword').type(userData.password);
                cy.contains('Login').click();   
            });
        });
    });