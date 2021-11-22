const express = require('express');

const multiplyOf3and5 = require('./api/multiply-of-3-and-5');

const app = express();
const port = 3000;

app.get('/multiply-of-3-and-5', multiplyOf3and5);

app.disable('x-powered-by');

app.listen(port, () => console.log(`App has been started using ${port}...`));
