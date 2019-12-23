const express = require('express');
const stub = require('./data-stub');

const app = express();
const data = stub;

app.all('*', (req, res, next) => {
    console.log('Request' + Date.now());
    res.json(data);
});

app.listen(3333, '127.0.0.1', () => {
    console.log('srv');
});
