const express = require('express');
const path = require('path');

const app = express();
const port = '3001';

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/looks/index.html');
});

app.use(express.static(path.join(__dirname + '/')));
app.listen(process.env.PORT || 5000, function () {
});