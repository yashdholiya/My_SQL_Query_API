const express = require("express");
const roleRoute = express.Router();
const rolecontroller = require("../../controller/employeetable/role.controller");

roleRoute.get("/role/getall", rolecontroller.getAllRoless);

roleRoute.get("/role/getOne/:role_id", rolecontroller.getaonerole);

roleRoute.put("/role/update/:role_id", rolecontroller.updateRoles);

roleRoute.delete("/role/delete/:role_id",rolecontroller.deleteRoles);

roleRoute.post("/role/add",rolecontroller.addroles);


module.exports = roleRoute;
