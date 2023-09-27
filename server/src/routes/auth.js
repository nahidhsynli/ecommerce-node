const express = require("express");
const { login, registration } = require("../controllers/AuthController");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/registration", registration   );

module.exports = authRouter;
