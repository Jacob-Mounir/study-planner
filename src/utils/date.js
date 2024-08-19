const weekdays = ['måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag', 'söndag']

// Den här funktionen är beroende av JavaScripts Date-modul och är svår att testa separat. Du behöver inte skriva enhetstest för den.
function getToday() {
	const dayIndex = (new Date().getDay() + 6) % 7;
	return weekdays[dayIndex];
}

export { getToday, weekdays }
