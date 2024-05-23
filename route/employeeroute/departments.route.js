const express = require("express");
const departmentroute = express.Router();
const departmentcontroller = require("../../controller/employeetable/department.controller");

departmentroute.get("/department", departmentcontroller.getAlldepartment);

departmentroute.post("/add", departmentcontroller.addepartment);

departmentroute.get("/:department_id", departmentcontroller.getdepartment); 

departmentroute.delete("/delete/:department_id",departmentcontroller.deletedepartment);

departmentroute.put("/update/:department_id", departmentcontroller.updateDepartment);


module.exports = departmentroute;
