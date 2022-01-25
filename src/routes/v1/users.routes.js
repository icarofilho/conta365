const express = require("express");
const userController = require("../../controllers/userController");
const userRoutes = express.Router();

userRoutes.get("/users", userController.usuarios);

module.exports = userRoutes;