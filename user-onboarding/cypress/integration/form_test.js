describe('User Addition Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
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

})