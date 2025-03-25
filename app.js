const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');  
const db = require('./database/db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));  
app.use('/', indexRouter);

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});

module.exports = app; //Test
