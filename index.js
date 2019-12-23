const express = require('express');
const stub = require('./data-stub');

const app = express();
const data = stub;

app.all('*', (req, res, next) => {
    console.log('Request' + Date.now());
    res.json(data);
});

app.listen(3332, () => {
    console.log('srv');
});
