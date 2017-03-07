const commons = require('./commons');
const skillsData = require('../data/skills').data;

exports.getData = (request, response) => {
  return response.status(200).json(commons.buildResponseObject(null, [skillsData]));
};
