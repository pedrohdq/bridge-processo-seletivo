const fs = require('fs');

function loadHistory() {
	const buffer = fs.readFileSync('history.json');
	return JSON.parse(buffer);
}

function saveToHistory(obj) {
	var history = loadHistory();
	if (history.length > 0) {
		history.push(obj);
	} else {
		history = [obj];
	}
	const json = JSON.stringify(history, null, 2);
	fs.writeFileSync('history.json', json);
}

module.exports = {saveToHistory, loadHistory};
