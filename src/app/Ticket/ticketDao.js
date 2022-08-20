async function discountTicket(connection, id){
    const discountTicketQuery = `
    UPDATE Human 
    SET tickets = tickets - 1 
    WHERE humanId=? and tickets > 0;
    `;
    const [discountTicketResult] = await connection.query(discountTicketQuery, id);
    return discountTicketResult;
}

async function addTicketDao(connection, id){
    const addTicketsQuery = `
    UPDATE Human 
    SET tickets = tickets + 1 
    WHERE humanId=?;
    `;
    const [addTicketsResult] = await connection.query(addTicketsQuery, id);
    return addTicketsResult;
}

module.exports = { discountTicket, addTicketDao };