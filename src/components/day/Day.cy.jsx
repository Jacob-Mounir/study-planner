import React from 'react';
import Day from './Day';
import { useStore } from '../../data/store';
import { weekdays } from '../../utils/date';

describe('<Day />', () => {
	beforeEach(() => {
		useStore.setState({ todos: [] });
	});

	it('Does not render items if day  not match dayIndex', () => {
		const testDay = [
			{
				id: 1,
				text: "T3st",
				done: false,
				late: false,
				day: "tu"
			}
		];

		const dayIndex = 0;

		useStore.setState({ todos: testDay });

		cy.mount(<Day day={testDay} dayIndex={dayIndex} />);

		cy.get('h2').contains(weekdays[dayIndex]);
		cy.contains("label").should('not.exist');
	});

	it('renders items if day matches dayIndex', () => {
		const testDay = [
			{
				id: 1,
				text: "T3st",
				done: false,
				late: false,
				day: "mo"
			}
		];

		const dayIndex = 0;

		useStore.setState({ todos: testDay });

		cy.mount(<Day day={testDay} dayIndex={dayIndex} />);

		cy.get('h2').contains(weekdays[dayIndex]);
		cy.contains('T3st');
	});
});