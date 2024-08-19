import Item from "./Item";
import { weekdays } from '../../utils/date';

const Day = ({ day, dayIndex }) => {
	const dayName = weekdays[dayIndex];

	return (
		<div className="day">
			<h2>{dayName}</h2>
			{day
				.map(item => (
					<Item key={item.id} item={item} />
				))}
			<div className="controls">
				<button>Ny uppgift</button>
			</div>
		</div>
	);
};

export default Day;