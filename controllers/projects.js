const commons = require('./commons');
const featuredProjectsData = require('../data/projects').featured;
const allProjectsData = require('../data/projects').all;

exports.getFeaturedProjectsData = (request, response) => {
  return response.status(200).json(commons.buildResponseObject(null, featuredProjectsData));
};

exports.getData = (request, response) => {
  return response.status(200).json(commons.buildResponseObject(null, allProjectsData));
};
