import express from "express";
const seatRouter = express.Router();
const seat = require("./seatController");

seatRouter.get("/", seat.getSeatedInfo);

seatRouter.get("/my", seat.getMySeatInfo);

seatRouter.post("/", seat.postSeat);

export default seatRouter;