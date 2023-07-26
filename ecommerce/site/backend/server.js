const express = require('express');
const app = express();
const port = 80;
const htmlFolder = '/html/';

app.set('view engine', 'ejs');

app.use(express.static(__dirname + htmlFolder));

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(port, () => console.log('app running'));
