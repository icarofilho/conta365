const express = require("express");
const financialRoutes = express.Router();
const financialController = require('../../controllers/v1/financial.controller');

financialRoutes.get("/financial", financialController.financial);