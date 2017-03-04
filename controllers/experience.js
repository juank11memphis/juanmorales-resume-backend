const commons = require('./commons');
const experienceData = require('../data/experience');

exports.getData = (request, response) => {
  return response.status(200).json(commons.buildResponseObject(null, [experienceData]));
};
