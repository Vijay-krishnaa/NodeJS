const express = require("express");
const path = require("path");
const userController = require("../controllers/userControllers");

const userRouter = express.Router();

userRouter.get("/user", userController.getHomePage);

userRouter.post("/newUser", userController.createNewUser);

userRouter.get("/getUser", userController.getUser);

userRouter.delete("/deleteUser", userController.deleteUser);

userRouter.put("/updateUser/:username", userController.updateUser);

userRouter.get("/allUsers", userController.getAllUsers);

module.exports = userRouter;
