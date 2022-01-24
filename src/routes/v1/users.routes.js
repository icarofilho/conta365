const express = require("express");
const userController = require("../../controllers/userController");
const userRoutes = express.Router();

userRoutes.get('/users', userController.index)

module.exports = userRoutes;