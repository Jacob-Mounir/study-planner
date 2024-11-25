describe('Weekdays Display', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should display all weekdays', () => {
		const weekdays = ['måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag', 'söndag']

		weekdays.forEach(day => {
			cy.get('.day h2').contains(day, { matchCase: false })
				.should('be.visible')
		})
	})

	it('should allow adding tasks to different days', () => {
		cy.get('.day').first().within(() => {
			cy.get('button').contains('Ny uppgift').click();
			cy.get('input[type="text"]')
				.should('be.visible')
				.type('Ny måndag uppgift{enter}');
		});

		cy.get('.day').first()
			.should('contain', 'Ny måndag uppgift');
	})

	it('should show correct number of days', () => {
		cy.get('.day').should('have.length', 7)
	})

	it('should persist tasks between days', () => {
		cy.get('.day').eq(1).within(() => {
			cy.get('button').contains('Ny uppgift').click()
			cy.get('input[type="text"]').type('Tisdag uppgift{enter}')
		})

		cy.get('.day').eq(1)
			.should('contain', 'Tisdag uppgift')
	})
})