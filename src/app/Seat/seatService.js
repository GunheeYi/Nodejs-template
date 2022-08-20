const { pool } = require("../../../config/database");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");

const seatDao = require("./seatDao");

exports.insertSeat = async function(insertSeatParams){
    console.log(insertSeatParams);
    const connection = await pool.getConnection(async (conn) => conn);

    try{
        const seatResult = await seatDao.createSeat(connection, insertSeatParams);
        return response(baseResponse.SUCCESS, seatResult.insertId);
    }
    catch(err){
        console.log(err.message);
        return errResponse(baseResponse.FAILURE);
    }finally{
        connection.release();
    }
}