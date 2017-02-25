const commons = require('./commons');
const skillsData = require('../data/skills');

exports.getData = (request, response) => {
  response.status(200).json(commons.buildResponseObject(null, skillsData));
};
