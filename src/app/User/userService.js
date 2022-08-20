const { pool } = require("../../../config/database");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");

const userDao = require("./userDao");

exports.postUser = async function (insertUserParams) {
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    const userResult = await userDao.insertUser(connection, insertUserParams);

    return response(baseResponse.SUCCESS, userResult.insertId);
  } catch (err) {
    console.log(err.message);
    return errResponse(baseResponse.FAILURE);
  } finally {
    connection.release();
  }
}
