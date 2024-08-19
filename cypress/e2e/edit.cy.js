describe("Edit function", () => {
    it("Works to edit text and use enter", () => {
        cy.visit("/");

        cy.get('[data-cy="edit-button"]').eq(1).click();

        const newTextSecond = "tenta 08-13";
        cy.get('[data-cy="edit-input"]').clear().type(newTextSecond);

        cy.get('[data-cy="edit-input"]').type("{enter}");

        cy.contains(newTextSecond).should("exist");
    });

    it("Works to edit text and save ", () => {
        cy.visit("/");

        cy.get('[data-cy="edit-button"]').eq(2).click();

        const newTextThird = "react testing";
        cy.get('[data-cy="edit-input"]').clear().type(newTextThird);

        cy.get('[data-cy="save-button"]').click();

        cy.contains(newTextThird).should("exist");
    });
    it("Validates a task that cant be saved as an empty string", () => {
        cy.visit("/");

        cy.window().then((win) => {
            cy.spy(win, "alert").as("alert");
        });

        cy.get('[data-cy="edit-button"]').eq(0).click();

        cy.get('[data-cy="edit-input"]').clear();

        cy.get('[data-cy="edit-input"]').type("{enter}");

        cy.get("@alert").should("have.been.calledWith", "Task cant be empty!");
    });
});
// .
