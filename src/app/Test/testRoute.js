import express from "express";
const testRouter = express.Router();
const test = require("./testController");

// 0.1. GET 테스트 API
/**
 * @swagger
 * paths:
 *  /test:
 *   get:
 *     tags: [TEST]
 *     summary: GET 테스트
 *     responses:
 *       "1000":
 *         description: GET 테스트 API 성공
 *       "2000":
 *         description: GET 테스트 API 실패
 *
 *
 */
testRouter.get("/", test.getTest);

// 0.2. POST 테스트 API
/**
 * @swagger
 * paths:
 *  /test:
 *   post:
 *     tags: [TEST]
 *     summary: POST 테스트
 *     consumes:
 *         - application/json
 *     parameters:
 *         - in: body
 *           name: test
 *           description: 테스트 생성 파라미터
 *           required:
 *              - name
 *           schema:
 *              type: object
 *              properties:
 *                  name:
 *                      descrpition: 이름
 *                      type: string
 *     responses:
 *       "1000":
 *         description: POST 테스트 API 성공
 *       "2000":
 *         description: POST 테스트 API 실패
 *
 *
 */
testRouter.post("/", test.postTest);

export default testRouter;
