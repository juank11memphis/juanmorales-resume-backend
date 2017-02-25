function buildResponseObject(error, result) {
  error = error === null ? undefined : error;
  const responseObject = {
    error: error,
    result: result
  };
  return responseObject;
}

module.exports = {
  buildResponseObject
};
