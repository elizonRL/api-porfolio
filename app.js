const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Welcome to the beginning of nothingness.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});