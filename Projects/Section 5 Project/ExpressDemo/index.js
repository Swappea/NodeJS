
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

const config = require('config');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');

//const authenticate = require('./authentication');

const express = require('express');
const app = express();

//3rd party middleware
const helmet = require('helmet');
const morgan = require('morgan');


// templating engine
app.set('view engine', 'pug');
app.set('views', './views'); // all templates insider folder view(optional setting)

//console.log(process.env.NODE_env); // if not set undefined
//console.log(app.get('env')); // default development


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(logger);
app.use(helmet());
// setting the router api
app.use('/', home);
app.use('/api/courses', courses);

// Configuration
console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server : ${config.get('mail.host')}`);
console.log(`Mail Password : ${config.get('mail.password')}`);

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...');
}

// db work
dbDebugger('Connected to the database');

//app.use(authenticate);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on Port ${port}...`);
});