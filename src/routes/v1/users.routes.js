const express = require("express");
const userController = require("../../controllers/userController");
const userRoutes = express.Router();

userRoutes.get("/users", userController.usuarios);
userRoutes.get("/user/:id", userController.listarUsuario);
userRoutes.post("/users", userController.addUsuarios);
userRoutes.patch("/user/:id", userController.atualizarUsuario);

module.exports = userRoutes;