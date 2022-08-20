const { pool } = require("../../../config/database");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");

const ticketDao = require('./ticketDao');

exports.getDiscountTicketProv = async function (id) {
    const connection = await pool.getConnection(async (conn) => conn);

    try{
        const ticketResult = await ticketDao.discountTicket(connection, id);
        return response(baseResponse.SUCCESS);
    }catch(err){
        console.log(err.message);
        return errResponse(baseResponse.FAILURE);
    }finally{
    connection.release();
    }
}

exports.getAddTicket = async function (id) {
    const connection = await pool.getConnection(async (conn) => conn);

    try{
        const ticketResult = await ticketDao.addTicketDao(connection, id)
        return response(baseResponse.SUCCESS);
    }catch(err){
        console.log(err.message);
        return errResponse(baseResponse.FAILURE);
    }finally{
    connection.release();
    }
}