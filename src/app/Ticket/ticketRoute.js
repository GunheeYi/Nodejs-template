import express from "express";
const ticketRouter = express.Router();
const ticket = require("./ticketController");

ticketRouter.get("/discount", ticket.getDiscountTicket);
ticketRouter.get("/add", ticket.addTicket)

export default ticketRouter;