const express = require('express');
const app = express();
const port = 1234;
const path = require('path');

const staticpath = path.join(__dirname, './PUBLIC');
app.use(express.static(staticpath));

const hbspath = path.join(__dirname, 'VIEWS/PAGES');
const partialpath = path.join(__dirname, './VIEWS/PARTIALS');
const hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', hbspath);
hbs.registerPartials(partialpath);

const session = require('express-session');
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const adminRoutes = require('./ROUTES/AdminRoute');
const publicRoutes = require('./ROUTES/PublicRoute');

app.use('/', publicRoutes);
app.use('/admin', adminRoutes);

app.listen(port, () => { console.log(`you are on server at port ${port}`) });