// userInfo
async function selectUser(connection, userId) {
    const selectUserQuery = `
    SELECT *
    FROM Human
    WHERE humanId = ?;
    `;
    const [userResult] = await connection.query(selectUserQuery, userId);

    return userResult;
}

// inser user
async function insertUser(connection, insertUserParams) {
    const insertUserQuery = `
    INSERT INTO Human (token, fullname) VALUES (?,?);
    `;

    const [insertUserRow] = await connection.query(insertUserQuery, insertUserParams);
    return  insertUserRow;
} 

// remain tickets
async function selectRemainTickets(connection, userId) {
    const selectRemainTicketsQuery = `
    SELECT tickets
    FROM Human
    WHERE humanId = ?;
    `;
    const [remainTicketsResult] = await connection.query(selectRemainTicketsQuery, userId);

    return remainTicketsResult;
}

// token-userId
async function selectToken(connection, token) {
    const selectTokenQuery = `
    SELECT humanId
    FROM Human
    WHERE token=?;

    `;
    const [tokenResult] = await connection.query(selectTokenQuery, token);

    return tokenResult[0];
}





module.exports = { selectUser, insertUser, selectRemainTickets, selectToken };
