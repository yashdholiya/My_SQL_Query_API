const express = require("express");
const router = express.Router();
const userController = require("../../controller/usertable/user.controller");

router.get("/users", userController.getAllUsers);

router.post("/user", userController.addUser);

router.get("/:id", userController.getUserById);

router.put("/update/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

router.get('/user/userslimit', userController.getUsersLimit);

router.get("/user/starty",userController.getUsersWithA);

router.get("/user/enda",userController.getUserendletera);

router.get('/users/:username', userController.getUserByUsername);

router.get('/user/desc', userController.userdescding);

router.get('/user/count', userController.countUsernames);


module.exports = router;
    