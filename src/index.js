const bearerToken = require('express-bearer-token');
const oktaAuth = require('./auth');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'swengDB',
  password: 'password',
  database: 'sweng894DB'
});

connection.connect();

const  port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bearerToken())
  .use(oktaAuth)
  .use(events(connection));

app.listen(port, () => {
  console.log('Express server listening on port ${port}');
});
