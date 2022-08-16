const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerDefinition = {
  info: {
    title: "TEST API",
    version: "1.0.0",
    description: "test",
  },
  host: "ori5ri.shop",
  basePath: "/",
  securityDefinitions: {
    jwt: {
      type: "apiKey",
      name: "x-access-token",
      in: "header",
    },
  },
  security: [{ jwt: [] }],
};

const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ["./src/app/Test/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
