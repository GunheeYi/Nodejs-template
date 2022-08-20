const express = require("express");
const compression = require("compression");
const methodOverride = require("method-override");
const cors = require("cors");
const { swaggerUi, specs } = require("../modules/swagger");
// import
import testRouter from "../src/app/Test/testRoute";
import userRouter from "../src/app/User/userRoute";
import seatRouter from "../src/app/Seat/seatRoute";
import ticketRouter from "../src/app/Ticket/ticketRoute";

module.exports = function () {
  const app = express();

  // compression 설정
  app.use(compression());

  // json 설정
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // method-override 설정
  app.use(methodOverride());

  // cors 설정
  app.use(cors());

  // swagger 설정
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

  // 0. Test API
  app.use("/test", testRouter);
  app.use("/user", userRouter);
  app.use("/seat", seatRouter);
  app.use("/ticket",ticketRouter);
  
  return app;
};
