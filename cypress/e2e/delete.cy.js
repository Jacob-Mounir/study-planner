describe("Checks the text of the first task, presses the delete button on the same task. Checks if the item is gone. ", () => {
  it("Checks the deletion of the first item", () => {
    cy.visit("/");

    cy.get('[data-cy="item"]').should("exist");

    cy.get('[data-cy="item"]').first().invoke("text").then((firstTaskText) => {
      firstTaskText = firstTaskText.trim();

      cy.contains(firstTaskText)
        .closest('[data-cy="item"]')
        .find('[data-cy="delete-button"]')
        .click();

      cy.contains(firstTaskText).should("not.exist");
    });
  });
});
