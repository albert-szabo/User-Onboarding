describe('User Addition Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosCheckbox = () => cy.get('input[name=tos]');
    const addUserButton = () => cy.get(`input[id='addUserButton']`);

    it('Sanity check to make sure tests work', () => {
        expect(3 + 5).to.equal(8);
        expect(7 + 2).not.to.equal(10);
    })

    it('Check that the proper elements are showing', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosCheckbox().should('exist');
        addUserButton().should('exist');

        cy.contains('Add user').should('exist');
    })

    describe('Filling out the inputs', () => {
        it('Can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })

        it('Can type in inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('firstName lastName')
                .should('have.value', 'firstName lastName');
            emailInput()
                .should('have.value', '')
                .type('sample@email.com')
                .should('have.value', 'sample@email.com');
            passwordInput()
                .should('have.value', '')
                .type('+p@sSwOrd1!')
                .should('have.value', '+p@sSwOrd1!');
        })
    })

    describe('Checking the terms of service checkbox', () => {
        it('Can check the terms of service checkbox', () => {
            tosCheckbox().click();
            tosCheckbox().should('have.value', 'on');
        })
    })

    describe('Adding a new user', () => {
        it('Can submit a new user', () => {
            addUserButton().click();

            cy.contains('firstName lastName').should('exist');
            cy.contains('sample@email.com').should('exist');
        })
    })

})