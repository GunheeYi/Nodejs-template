const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const ticketProvider = require("./ticketProvider");
const ticketService = require("./ticketService");


// [GET] ticket/discount?userId=#
exports.getDiscountTicket = async function (req, res) {
    // body 
    const { userId } = req.query;

    // validation
    if (!userId) {
        return res.send(errResponse(baseResponse.FAILURE));
    }

    // response
    const getDiscountTicketResponse = await ticketProvider.getDiscountTicketProv(userId);

    return res.send(getDiscountTicketResponse);
}

// [GET] ticket/add?userId=#
exports.addTicket = async function (req, res) 
{
    const {userId} = req.query;

    // validation
    if (!userId) {
        return res.send(errResponse(baseResponse.FAILURE));
    }

    const getAddTicketResponse = await ticketProvider.getAddTicket(userId);

    return res.send(getAddTicketResponse);
}