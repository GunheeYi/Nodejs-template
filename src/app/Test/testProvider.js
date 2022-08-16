const { pool } = require("../../../config/database");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const { logger } = require("../../../config/winston");

const testDao = require("./testDao");

exports.retrieveTestList = async function () {
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    const testResult = await testDao.selectTest(connection);

    return response(baseResponse.SUCCESS, testResult);
  } catch (err) {
    console.log(err.message);
    return errResponse(baseResponse.FAILURE);
  } finally {
    connection.release();
  }
};
