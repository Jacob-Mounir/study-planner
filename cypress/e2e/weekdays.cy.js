it('should allow adding tasks to different days', () => {
    cy.get('.day').first().within(() => {
        cy.get('button').contains('Ny uppgift').click();
        cy.get('input[type="text"]')
            .should('be.visible')
            .type('Ny måndag uppgift{enter}');
    });

    cy.get('.day').first()
        .should('contain', 'Ny måndag uppgift');
}); 