import express from 'express';
import { stub } from './data-stub';

const app = express();
const data = stub;

app.all('*', (req, res, next) => {
    console.log('Request' + Date.now());
    res.json(data);
});

app.listen(3333, 'localhost', () => {
    console.log('srv');
});
