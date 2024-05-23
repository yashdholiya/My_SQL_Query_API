const express = require("express");
const joinrouter = express.Router();

const jointablecontroller = require("../../controller/jointable/user&userinfo.controller")

 joinrouter.get('/join',jointablecontroller.jointable)



 module.exports = joinrouter;
