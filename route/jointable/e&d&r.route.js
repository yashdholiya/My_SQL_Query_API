const express = require("express");
joinedrrouter = express.Router();
const jointableedrcontroller = require("../../controller/jointable/e&d&r.controller");

joinedrrouter.get("/join/edr", jointableedrcontroller.jointableedr);

module.exports = joinedrrouter;
