const commons = require('./commons');
const interestsData = require('../data/interests').data;

exports.getData = (request, response) => {
  return response.status(200).json(commons.buildResponseObject(null, interestsData));
};
