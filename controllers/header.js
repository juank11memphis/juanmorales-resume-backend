const commons = require('./commons');
const headerPageData = require('../data/header').pageData;

exports.getPageData = (request, response) => {
  response.status(200).json(commons.buildResponseObject(null, headerPageData));
};
