import "dotenv/config";
const app = require("./config/express");
const { logger } = require("./config/winston");

let PORTNUM = 4000;

app().listen(PORTNUM, () => {
  logger.info(`✅Start Express Server on port ${PORTNUM} `);
  console.log(`✅ Check it out! at here --> http://localhost:${PORTNUM}/`);
});
