import React from "react";
import Item from "./Item";
import { useStore } from "../../data/store";

describe("<Item />", () => {

	beforeEach(() => {
		useStore.setState({ todos: [] });
	});

	it("renders with testprops", () => {
		const testItem = {
			id: 1,
			text: "T3st",
			done: false,
			late: false,
		};

		const todos = useStore.getState().todos
		expect(todos).to.deep.equal([]);

		useStore.setState({
			todos: [testItem],
		});

		cy.mount(<Item item={testItem} />);
		cy.get('input[type="checkbox"]').should("be.visible");
		cy.get("span").contains("🗑️").should("be.visible")
		cy.get("label").contains("T3st");
		expect(useStore.getState().todos).to.deep.equal([testItem]);

	});

});
