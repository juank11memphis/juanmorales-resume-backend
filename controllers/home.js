const commons = require('./commons');
const homePageData = require('../data/home').pageData;

exports.getPageData = (request, response) => {
  response.status(200).json(commons.buildResponseObject(null, homePageData));
};
