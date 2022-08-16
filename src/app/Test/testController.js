const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const testProvider = require("./testProvider");
const testService = require("./testService");

/**
 * API No. 0.1
 * API Name : GET 테스트 API
 * [GET] /test
 */

exports.getTest = async function (req, res) {
  // query, path variable, body

  // validation

  // response
  const getTestResponse = await testProvider.retrieveTestList();

  return res.send(getTestResponse);
};

/**
 * API No. 0.2
 * API Name : POST 테스트 API
 * [POST] /test
 */
exports.postTest = async function (req, res) {
  // body
  const { name } = req.body;
  //validation

  //response
  const postTestResponse = await testService.postTestRecord([name]);

  return res.send(postTestResponse);
};
