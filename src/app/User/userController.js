const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const userProvider = require("./userProvider");
const userService = require("./userService");

// [GET] user?userId=#
exports.getUser = async function (req, res) {
    // query, path variable, body
    const { userId } = req.query;

    console.log(userId);
    // validation
    if (!userId) {
        return res.send(errResponse(baseResponse.FAILURE));
    }

    // response
    const getUserResponse = await userProvider.retrieveUser(userId);
    return res.send(getUserResponse);
};

exports.postUser = async function (req, res) {
    // body
    const { token, fullName } = req.body;

    //validation
    if (!token || !fullName) {
        return res.send(errResponse(baseResponse.FAILURE));
    }
    //response
    const postUserResponse = await userService.postUser([token, fullName]);

    return res.send(postUserResponse);
}

// [GET] user/ticket?userId=#
exports.getTicket = async function (req, res) {
    // query, path variable, body
    const { userId } = req.query;

    console.log(userId);
    // validation
    if (!userId) {
        return res.send(errResponse(baseResponse.FAILURE));
    }

    // response
    const getTicketResponse = await userProvider.retrieveTicket(userId);
    return res.send(getTicketResponse);
}   