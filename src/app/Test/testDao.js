async function selectTest(connection) {
  const selectTestQuery = `
    SELECT *
    FROM TEST;
    `;
  const [testResult] = await connection.query(selectTestQuery);

  return testResult;
}

async function insertTest(connection, insertTestParams) {
  const insertTestQuery = `
    INSERT INTO TEST(name)
    VALUES (?);
    `;

  const [insertTestRow] = await connection.query(
    insertTestQuery,
    insertTestParams
  );

  return insertTestRow;
}

module.exports = { selectTest, insertTest };
