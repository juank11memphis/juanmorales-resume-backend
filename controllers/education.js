const commons = require('./commons');
const educationData = require('../data/education').data;

exports.getData = (request, response) => {
  return response.status(200).json(commons.buildResponseObject(null, educationData));
};
