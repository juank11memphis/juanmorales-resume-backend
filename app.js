let express = require('express');
let bodyParser = require('body-parser');
let config = require('config');
let morgan = require('morgan');
let app = express();

if(config.util.getEnv('NODE_ENV') !== 'test') {
  app.use(morgan('combined'));
}

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

// Import Models and Controllers
let HeaderCtrl = require('./controllers/header');

let router = express.Router();

// Index - Route
router.get('/', function(req, res) {
  res.send('Welcome to Juan Morales Resume Back-End');
});

app.use(router);

// API routes
let api = express.Router();

api.route('/header')
  .get(HeaderCtrl.getData);

app.use('/api', api);

// Start server
app.listen(3001, () => {
  console.log("Node server running on http://localhost:3001");
});

module.exports = {app, config};
