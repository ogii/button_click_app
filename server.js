const express = require('express');
const app = express();

// specify view engine as ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

// index route
app.get('/', (req, res) => res.render('pages/index'));

app.listen(8080);