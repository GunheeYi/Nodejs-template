const { pool } = require("../../../config/database");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");

const userDao = require("./userDao");

exports.retrieveUser = async function (id) {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
        const userResult = await userDao.selectUser(connection, id);

        return response(baseResponse.SUCCESS, userResult);
    } catch (err) {
        console.log(err.message);
        return errResponse(baseResponse.FAILURE);
    } finally {
        connection.release();
    }
};

exports.retrieveTicket = async function (id){
    const connection = await pool.getConnection(async (conn) => conn);

    try {
        const ticketResult = await userDao.selectRemainTickets(connection, id);
        return response(baseResponse.SUCCESS, ticketResult);
        
    } catch (err) {
        console.log(err.message);
        return errResponse(baseResponse.FAILURE);
    } finally {
        connection.release();
    }
}

exports.retrieveToken = async function(token){
    const connection = await pool.getConnection(async (conn) => conn);

    try {
        const ticketResult = await userDao.selectToken(connection, token);
        console.log(ticketResult);
        return response(baseResponse.SUCCESS, ticketResult);
        
    } catch (err) {
        console.log(err.message);
        return errResponse(baseResponse.FAILURE);
    } finally {
        connection.release();
    }
}