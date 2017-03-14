const commons = require('./commons');
const contactPageData = require('../data/contact').pageData;
const {sendMail} = require('../util/mailSender');

exports.getPageData = (request, response) => {
  response.status(200).json(commons.buildResponseObject(null, contactPageData));
};

exports.sendContactMessage = (request, response) => {
  sendMail(request.body, function(err, results) {
    if (err) {
      console.log('err:', err);
    } else {
      response.status(200).json(commons.buildResponseObject(null, { success: true }));
    }
  });
};
