const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

const app = express(),
    PORT = process.env.PORT || 1313;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});