// get seated info
async function selectSeated(connection, seatId) {
    const selectSeatedQuery = `
    SELECT H.fullname, Seated.seat, Seated.stationId
    FROM Seated
    LEFT JOIN Human H on H.humanId = Seated.humanId
    WHERE Seated.SeatedId =? and Seated.active='ACTIVE';
    `;

    const [seatedResult] = await connection.query(selectSeatedQuery, seatId);

    return seatedResult
}

// get my seat
async function getMySeat(connection , id){
    const getMySeatQuery = `
    SELECT seat, stationId
    FROM Seated
    WHERE humanId=?  and active='ACTIVE';
    `;

    const [mySeatResult] = await connection.query(getMySeatQuery, id);
    return mySeatResult;

}

// create seat

async function createSeat(connection, insertSeatParams){
    const createSeatQuery = `
    INSERT INTO Seated (humanId, trainId, car, door, seat, stationId) VALUES (?, ?, ?, ?, ?, ?);
    `;

    const [createSeatResult] = await connection.query(createSeatQuery, insertSeatParams);

    return createSeatResult;
}



module.exports = { selectSeated, getMySeat, createSeat };