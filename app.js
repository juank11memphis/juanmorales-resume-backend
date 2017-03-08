const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

if(config.util.getEnv('NODE_ENV') !== 'test') {
  app.use(morgan('combined'));
}

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

//CORS Enable
const originsWhitelist = [
  'http://localhost:3000'
];
const corsOptions = {
  origin: function(origin, callback){
    const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  }
}
app.use(cors(corsOptions));

// Import Models and Controllers
const HeaderCtrl = require('./controllers/header');
const HomeCtrl = require('./controllers/home');
const SkillsCtrl = require('./controllers/skills');
const ExperienceCtrl = require('./controllers/experience');
const ProjectsCtrl = require('./controllers/projects');
const EducationCtrl = require('./controllers/education');

const router = express.Router();

// Index - Route
router.get('/', function(req, res) {
  res.send('Welcome to Juan Morales Resume Back-End');
});

app.use(router);

// API routes
const api = express.Router();

api.route('/header/pagedata')
  .get(HeaderCtrl.getPageData);

api.route('/home/pagedata')
  .get(HomeCtrl.getPageData);

api.route('/skills')
  .get(SkillsCtrl.getData);

api.route('/experience')
  .get(ExperienceCtrl.getData);

api.route('/projects')
  .get(ProjectsCtrl.getData);

api.route('/projects/featured')
  .get(ProjectsCtrl.getFeaturedProjectsData);

api.route('/education')
  .get(EducationCtrl.getData);

app.use('/api', api);

// Start server
app.listen(3001, () => {
  console.log("Node server running on http://localhost:3001");
});

module.exports = {app, config};
