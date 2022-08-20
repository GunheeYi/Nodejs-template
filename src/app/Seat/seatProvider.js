const { pool } = require("../../../config/database");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");

const seatDao = require("./seatDao");

exports.retrieveMySeatInfo = async function (id) {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
        const seatResult = await seatDao.getMySeat(connection, id);

        return response(baseResponse.SUCCESS, seatResult);
    } catch (err) {
        console.log(err.message);
        return errResponse(baseResponse.FAILURE);
    } finally {
        connection.release();
    }
}

exports.retrieveSeatedInfo = async function (id){
    const connection = await pool.getConnection(async (conn) => conn);

    try {
        const seatResult = await seatDao.selectSeated(connection, id);
        return response(baseResponse.SUCCESS, seatResult);
    } catch (err) {
        console.log(err.message);
        return errResponse(baseResponse.FAILURE);
    } finally {
        connection.release();
    }
}