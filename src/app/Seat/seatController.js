const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const seatProvider  = require("./seatProvider");
const seatService = require("./seatService");

// [GET] seat/my?userId=#
exports.getMySeatInfo = async function (req, res) {
    const { userId } = req.query;

    // validation
    if (!userId) {
        return res.send(errResponse(baseResponse.FAILURE));
    }
    
    const getMySeatInfoResponse = await seatProvider.retrieveMySeatInfo(userId);

    return res.send(getMySeatInfoResponse);
}

// [GET] seat?userId=#
exports.getSeatedInfo = async function (req, res) {
    const {seatedId} = req.query;

    // validation
    if (!seatedId) {
        return res.send(errResponse(baseResponse.FAILURE));
    }
    const getSeatedInfoResponse = await seatProvider.retrieveSeatedInfo(seatedId);

    return res.send(getSeatedInfoResponse)


}

// [POST] /seat
exports.postSeat = async function (req, res) {
    const { humanId, trainId, car, door, seat, stationId} = req.body;
    console.log(req.body)

    // validation
    if (!humanId || !trainId || !car || !door || !seat || !stationId) {
        return res.send(errResponse(baseResponse.FAILURE));
    }
    const postSeatResponse = await seatService.insertSeat([humanId, trainId, car, door, seat, stationId]);

    return res.send(postSeatResponse);
}
