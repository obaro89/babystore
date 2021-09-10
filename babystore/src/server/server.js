const express = require('express');

const app = express();

app.get('/', (req, res) => {
	console.log('running');
});

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
	console.log('server started at port ' + PORT);
});
