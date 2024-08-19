import React from 'react';
import PrioItem from './PrioItem';

describe('<PrioItem />', () => {
	it('renders correctly with basic props', () => {
		const item = { id: 1, text: 'Test task', late: false };
		cy.mount(<PrioItem item={item} num={1} />);

		cy.contains('1. Test task').should('be.visible');
	});

	it('applies the correct class when late is true', () => {
		const item = { id: 2, text: 'Late', late: true };
		cy.mount(<PrioItem item={item} num={2} />);

		cy.get('.item').should('have.class', 'due');
	});

	it('does not apply the class when the late is false', () => {
		const item = { id: 3, text: 'Not late', late: false };
		cy.mount(<PrioItem item={item} num={3} />);

		cy.get('.item').should('not.have.class', 'due');
	});
});