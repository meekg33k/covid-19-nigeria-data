const express = require('express');
const cors = require('cors');
const stateSpreadData = require('./data/covid_nigeria_state_data');
const totalSpreadData = require('./data/covid_nigeria_total_data');

const serve = ({ port }) => {
	const app = express();
	app.use(express.json());
	app.use(cors());

	app.get('/state', async (_, res) => {
		res.status(200).json({ data: stateSpreadData });
	});

	app.get('/states', async (_, res) => {
		res.status(200).json({ data: stateSpreadData });
	});

	app.get('/total', async (_, res) => {
		res.status(200).json({ data: totalSpreadData });
	});

	app.get('*', async (_, res) => {
		res.status(200).json({
			states: stateSpreadData,
			total: totalSpreadData
		});
	});

	return new Promise((resolve, reject) => {
		const _server = app.listen(port, err => {
			if (err) {
				reject(err);
				return;
			}
			console.log(`Data server listening on port ${port}.`);
			resolve(_server);
		});
	});
}

module.exports = serve;
