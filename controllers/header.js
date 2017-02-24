const commons = require('./commons');
const headerData = require('../data/header');

exports.getData = (request, response) => {
  response.status(200).json(commons.buildResponseObject(null, headerData));
};
