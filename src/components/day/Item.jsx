import { useStore } from "../../data/store";
import React, { useState } from "react";

// Acceptanskriterier:
// 1. Rendera komponenten
// 2. Klicka i checkbox, för att visa om den är klar eller inte
// 3. Klicka på tabort för att kunna ta bort en specifik task
// 4. Klicka på redigera för att redigera en task
// 4.1. Validera så att man inte kan spara en tom sträng som task
// 4.2 Ändra redigera till spara, för att kunna spara en

const Item = ({ item }) => {
	const toggleTodo = useStore((state) => state.toggleTodo);
	const deleteTodo = useStore((state) => state.deleteTodo);
	const updateTodo = useStore((state) => state.updateTodo);

	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(item.text);

	let itemClass = "";
	if (item.done) itemClass += "done";
	if (item.late) itemClass += "due";

	const handleChange = () => {
		toggleTodo(item.id);
	};

	const handleDelete = () => {
		deleteTodo(item.id);
	};

	const handleEdit = () => {
		setIsEditing(true);
	};



	const handleSave = () => {
		if (editText.trim() === "") {
			alert("Task cant be empty!");
			return;
		}
		updateTodo(item.id, editText);
		setIsEditing(false);
	};

	return (
		<div className="item" data-cy="item">
			<div>
				<input
					type="checkbox"
					checked={item.done}
					onChange={handleChange}
				/>

				{isEditing ? (
					<input
						type="text"
						value={editText}
						data-cy="edit-input"
						onChange={(e) => setEditText(e.target.value)}
						onBlur={handleSave}
						onKeyDown={(e) => {
							if (e.key === "Enter") handleSave();
						}}
					/>
				) : (
					<label data-cy="text" className={itemClass} onClick={handleChange}>
						{item.text}
					</label>
				)}
			</div>
			<div style={{ display: "flex" }}>
				{isEditing ? (
					<span data-cy="save-button" title="Spara" onClick={handleSave}>
						💾
					</span>
				) : (
					<span data-cy="edit-button" title="Ändra" onClick={handleEdit}>
						✍️
					</span>
				)}
				<span data-cy="delete-button" onClick={handleDelete}>🗑️</span>{" "}
			</div>
		</div>
	);
};

export default Item;