const express = require('express');
const bodyParser = require('body-parser');

const callsRoutes = require('./router/calls');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next();
});
app.use(bodyParser.json());

app.use('/', callsRoutes);

module.exports = app;