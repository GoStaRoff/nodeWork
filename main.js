const express = require('express');
const app = express();
const cookieParse = require('cookie-parser');
const exphbs = require('express-handlebars');
const router = require('./routes/route');
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static('public'));
app.use('/',router);
app.use(cookieParse())
app.listen(3000, ()=>{console.log("started")});