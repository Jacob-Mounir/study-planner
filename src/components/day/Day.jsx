import Item from "./Item";
import { weekdays } from '../../utils/date';
import { useState } from 'react';
import { useStore } from '../../data/store';

const Day = ({ day, dayIndex }) => {
	const [showInput, setShowInput] = useState(false);
	const [newTask, setNewTask] = useState('');
	const setTodos = useStore(state => state.setTodos);
	const todos = useStore(state => state.todos);
	const dayName = weekdays[dayIndex];

	const handleAddTask = (e) => {
		if (e.key === 'Enter' && newTask.trim()) {
			const dayCode = ['mo', 'ti', 'on', 'to', 'fr', 'lo', 'so'][dayIndex];
			const newTodo = {
				id: Date.now(),
				text: newTask,
				done: false,
				late: false,
				day: dayCode
			};
			setTodos([...todos, newTodo]);
			setNewTask('');
			setShowInput(false);
		}
	};

	return (
		<div className="day">
			<h2>{dayName}</h2>
			{day.map(item => (
				<Item key={item.id} item={item} />
			))}
			<div className="controls">
				{showInput ? (
					<input
						type="text"
						value={newTask}
						onChange={(e) => setNewTask(e.target.value)}
						onKeyPress={handleAddTask}
						placeholder="Skriv och tryck Enter"
						autoFocus
					/>
				) : (
					<button onClick={() => setShowInput(true)}>Ny uppgift</button>
				)}
			</div>
		</div>
	);
};

export default Day;