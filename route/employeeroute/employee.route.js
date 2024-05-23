const express = require("express");
const employeerouter = express.Router();
const employeecontroller = require("../../controller/employeetable/employee.controller");

employeerouter.get("/employee", employeecontroller.getAllEmployees);

employeerouter.post("/add", employeecontroller.addEmployee);

employeerouter.get("/:employee_id", employeecontroller.getEmployeeById);

employeerouter.get("/employee/department/:departmentid", employeecontroller.getdepartmrntId);

employeerouter.delete("/delete/:employee_id", employeecontroller.deleteEmployee);

employeerouter.put("/update/:employee_id", employeecontroller.updateEmployee);

employeerouter.get("/employee/starta", employeecontroller.getEmployeesWithNameStartingWithA);

employeerouter.get('/employee/count', employeecontroller.getEmployeeNameCount);    

employeerouter.get('/employee/not2', employeecontroller.getNotInDepartment2);

employeerouter.get('/employee/between', employeecontroller.getBetweenDepartments1And2);

employeerouter.get('/employee/orderedByDepartment', employeecontroller.getAllEmployeesOrderedByDepartmentId);


module.exports = employeerouter;
    