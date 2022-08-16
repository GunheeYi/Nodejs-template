const { pool } = require("../../../config/database");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const { logger } = require("../../../config/winston");

const testDao = require("./testDao");

exports.postTestRecord = async function (insertTestParams) {
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    const connection = await pool.getConnection(async (conn) => conn);
    const testResult = await testDao.insertTest(connection, insertTestParams);

    return response(baseResponse.SUCCESS);
  } catch (err) {
    console.log(err.message);
    return errResponse(baseResponse.FAILURE);
  } finally {
    connection.release();
  }
};
