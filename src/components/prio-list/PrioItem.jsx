
const PrioItem = ({ item, num }) => {
	let itemClass = "item";
	if (item.late) itemClass += " due";

	return (
		<div data-cy="prio-item" className={itemClass}>
			{num}. {item.text}
		</div>
	);
};

export default PrioItem;
