describe('Search tasks, then finds it and then search again for a task and doesnt match any other', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Filters tasks based on search input', () => {
    const correctText = 'plugga';
    const incorrectText = 'städa';

    cy.get('[data-cy="search-input"]').type(correctText);

    cy.get('[data-cy="prio-item"]').should('have.length', 1);

    cy.get('[data-cy="search-input"]').clear();

    cy.get('[data-cy="search-input"]').type(incorrectText);

    cy.get('[data-cy="prio-item"]').should('not.exist');

    cy.get('[data-cy="search-input"]').clear();

    cy.get('[data-cy="prio-item"]').should('have.length.gt', 0);
  });
});
