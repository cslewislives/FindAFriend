const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    html = require('./app/routing/htmlRoutes'),
    api = require('./app/routing/apiRoutes');

const app = express(),
    PORT = process.env.PORT || 1313;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', html);
app.use('/api', api);

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});