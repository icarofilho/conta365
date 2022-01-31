const express = require("express");
const financialRoutes = express.Router();
const financialController = require('../../controllers/financialController');

financialRoutes.get("/financiallist", financialController.listar);

module.exports = financialRoutes;