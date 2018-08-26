require('dotenv').config();

const bodyParser   = require('body-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const path         = require('path');
const session      = require("express-session");
const MongoStore = require("connect-mongo")(session);

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/backend', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(require('cors')({
  origin: true,
  credentials: true
}))

app.use(session({
  store: new MongoStore({
    mongooseConnection:mongoose.connection,
    ttl:24*60*60
  }),
  secret: 'lili',
  saveUninitialized: true,
  resave: false,
  cookie : { httpOnly: true, maxAge: 2419200000 },
}));

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Routes
const index = require('./routes/index');
const books = require('./routes/books');
const auth = require('./routes/auth');
app.use('/api/books', books);
app.use('/api/', auth);
app.use('/', index);


module.exports = app;
