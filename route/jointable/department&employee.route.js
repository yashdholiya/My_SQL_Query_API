const express = require("express");
const joind_erouter = express.Router();
const EmployeeDepartmentController = require("../../controller/jointable/department&employee.controller")

joind_erouter.get("/employees-with-departments", EmployeeDepartmentController.getEmployeesWithDepartments);

joind_erouter.get('/joine-d',EmployeeDepartmentController.getEmployeesWithDepartmentsjoin)

joind_erouter.get('/left-joine-d',EmployeeDepartmentController.getEmployeesWithDepartmentsLeftjoin)

joind_erouter.get('/right-joine-d',EmployeeDepartmentController.employeeRightJoinDepartment)

joind_erouter.get('/cross-joine-d',EmployeeDepartmentController.employeecrossJoinDepartment)


 module.exports = joind_erouter;
