const express = require('express');
const cors = require('cors');
const {loadHistory, saveToHistory} = require('./history');
const calculateDivisors = require('./divisors');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/api/divisores', (req, res) => {
	const divisors = calculateDivisors(req.query.number);
	const obj = {
		number: req.query.number,
		divisors,
		isPrime: divisors.length === 2 ? true : false,
	};
	saveToHistory(obj);
	res.json(obj);
});

app.get('/api/historico', (req, res) => {
	res.json(loadHistory());
});

app.listen(port, () => {
	console.log(`server started on port ${port}`)
});
