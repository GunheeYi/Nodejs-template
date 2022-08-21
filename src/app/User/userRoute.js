import express from "express";
const userRouter = express.Router();
const user = require("./userController");

userRouter.get("/", user.getUser);

userRouter.post("/", user.postUser);

userRouter.get("/ticket", user.getTicket);

userRouter.get("/token", user.getToken);

export default userRouter;