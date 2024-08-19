import { test, it, expect, describe } from "vitest";
import { splitTodosIntoDays } from "./list.js";

describe("testing splitTodosIntoDays", () => {
	// 1. Funktionen ska returnera en array med fem arrayer, en för varje veckodag
	// 1.2 Todos ska sorteras i rätt dag, även om det finns flera på en och samma

	it("split todos into separate arrays for each day", () => {
		const testTodos = [
			{ task: "Task 1", day: "mo" },
			{ task: "Task 2", day: "ti" },
			{ task: "Task 3", day: "on" },
			{ task: "Task 4", day: "to" },
			{ task: "Task 5", day: "fr" },
			{ task: "Task 6", day: "mo" },
		];

		expect(splitTodosIntoDays(testTodos)).toEqual([
			[
				{ task: "Task 1", day: "mo" },
				{ task: "Task 6", day: "mo" },
			],
			[{ task: "Task 2", day: "ti" }],
			[{ task: "Task 3", day: "on" }],
			[{ task: "Task 4", day: "to" }],
			[{ task: "Task 5", day: "fr" }],
		]);
	});

	// 2. Den ska returnera en tom array om det inte finns några tasks för en specifik dag
	// 2.1. Den ska returnera en tom array om det inte finns några tasks alls
	// 3. Om tasksen inte har korrekta veckodagar ska den ignoreras

	it("should return empty arays for days with no todos", () => {
		const testTodos = [
			{ task: "Task 1", day: "mo" },
			{ task: "Task 2", day: "not thursday" },
			{ task: "Task 3", day: "ti" },
		];

		expect(splitTodosIntoDays(testTodos)).toEqual([
			[{ task: "Task 1", day: "mo" }],
			[{ task: "Task 3", day: "ti" }],
			[],
			[],
			[],
		]);
	});

	it("should handle an empty todos array", () => {
		const testTodos = [];

		expect(splitTodosIntoDays(testTodos)).toEqual([[], [], [], [], []]);
	});
});
