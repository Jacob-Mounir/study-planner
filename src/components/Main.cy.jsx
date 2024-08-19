import React from "react";
import Main from "./Main";
import { useStore } from "../data/store";

describe("<Main />", () => {
	beforeEach(() => {
		cy.viewport(1000, 660);
	});

	it("renders the Main component", () => {
		cy.mount(<Main />);
		cy.get("main").should("exist");
		cy.get(".day-view").should("exist");
	});



	it("toggles todo item when checkbox is clicked", () => {
		const testTodos = [
			{ id: 1, text: "Task 1", done: false, late: false, day: "mo" },
		];

		useStore.setState({ todos: testTodos });

		cy.mount(<Main />);

		cy.get('input[type="checkbox"]').should("not.be.checked").click();
		cy.get('input[type="checkbox"]').should("be.checked");
	});

	it("deletes a todo item when delete button is clicked", () => {
		const testTodos = [
			{ id: 1, text: "Task 1", done: false, late: false, day: "mo" },
		];

		useStore.setState({ todos: testTodos });

		cy.mount(<Main />);

		cy.get("span").contains("🗑️").click();
		cy.get(".item").should("not.exist");
	});

	it("edits a task", () => {
		const testTodos = [
			{ id: 1, text: "Task 1", done: false, late: false, day: "mo" },
		];

		useStore.setState({ todos: testTodos });

		cy.mount(<Main />);

		cy.get('span[title="Ändra"]').click();
		cy.get('input[type="text"]').clear().type("Updated Task 1{enter}");
		cy.get(".item label").should("contain", "Updated Task 1");
	});
});
