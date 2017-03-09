const commons = require('./commons');
const footerPageData = require('../data/footer').pageData;

exports.getPageData = (request, response) => {
  return response.status(200).json(commons.buildResponseObject(null, footerPageData));
};
