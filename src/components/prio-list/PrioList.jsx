import React, { useState, useEffect, useMemo } from 'react';
import PrioItem from "./PrioItem";
import { useStore } from '../../data/store.js';

const PrioList = () => {
	const todos = useStore(state => state.todos);
	const items = useMemo(() => todos.filter(t => !t.done), [todos]);
	const [searchInput, setSearchInput] = useState('');
	const [filteredItems, setFilteredItems] = useState(items);

	useEffect(() => {
		setFilteredItems(
			items.filter(item =>
				item.text.toLowerCase().includes(searchInput.toLowerCase())
			)
		);
	}, [searchInput, items]);

	return (
		<div className="prio-list">
			<h2> Vad ska jag göra nu? </h2>
			<div className="list-container">
				<input
					className="search-input"
					type="search"
					data-cy="search-input"
					placeholder="Filtrera uppgifter"
					value={searchInput}
					onChange={e => setSearchInput(e.target.value)}
				/>
				<div className="prio-items" data-cy="prio-items" >
					{filteredItems.map((item, index) => (
						<PrioItem key={item.id} item={item} num={index + 1} />
					))}
				</div>
			</div>
		</div>
	);
};

export default PrioList;