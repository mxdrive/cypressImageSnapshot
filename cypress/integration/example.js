describe('Snapshot example', function () {
    context('Make snapshot', function() {
        it('should use autocomplete for ".matchImageSnapshot" method added to Cypress main class', function () {
            cy.visit('https://www.google.com')
            cy.get('input[name^="q"]').matchImageSnapshot()
        });
    });
});