import React from "react";
import PrioList from "./PrioList";
import { useStore } from "../../data/store";

describe("<PrioList />", () => {
	it("Renders the prio list if input is empty", () => {
		cy.mount(<PrioList />);
	});
	it("Renders the filtered prio list if input has matching result (lower and upper case)", () => {
		const testTodos = [
			{
				id: 200,
				day: "mo",
				done: false,
				late: false,
				text: "testing",
			},
			{
				id: 23,
				day: "ti",
				done: false,
				late: false,
				text: "TESTING",
			},
			{
				id: 23,
				day: "ti",
				done: false,
				late: false,
				text: "AAAAAAAAAAA",
			},
		];

		useStore.setState({
			todos: testTodos,
		});

		cy.mount(<PrioList />);
		cy.get(".search-input").should("be.visible");

		cy.get(".search-input").type("tes");
		cy.get(".prio-items .item").should("have.length", 2);

		cy.get(".search-input").clear().type("TEST");
		cy.get(".prio-items .item").should("have.length", 2);
	});
});
