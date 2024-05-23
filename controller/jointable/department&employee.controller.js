const joineAnddServices = require("../../services/jointable/employee&department.service");

class EmployeeDepartmentController {
  //USE INNER JOIN
  async getEmployeesWithDepartments(req, res) {
    try {
      const employees = await joineAnddServices.getEmployeesWithDepartments();
      res.json(employees);
    } catch (error) {
      console.error("Error getting employees with departments:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  // USE JOIN
  async getEmployeesWithDepartmentsjoin(req, res) {
    try {
      const users = await joineAnddServices.getEmployeeWithDepartmentJoin();
      res.status(200).json(users);
    } catch (err) {
      console.error("Error getting employees with departments:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  //USE LEFT JOIN
  async getEmployeesWithDepartmentsLeftjoin(req, res) {
    try {
      const users = await joineAnddServices.getEmployeeWithDepartmentleftJoin();
      res.status(200).json(users);
    } catch (err) {
      console.error("Error getting employees with departments:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  //USE RIGHT JOIN
  async employeeRightJoinDepartment(req, res) {
    try {
      const users =
        await joineAnddServices.getEmployeeWithDepartmentrightJoin();
      res.status(200).json(users);
    } catch (err) {
      console.error("Error getting employees with departments:", err);
      res.status(500).send("Internal Server Error");
    }
  }

  //USE CROSS JOIN
  async employeecrossJoinDepartment(req, res) {
    try {
      const users =
        await joineAnddServices.getEmployeeWithDepartmentcrossJoin();
      res.status(200).json(users);
    } catch (err) {
      console.error("Error getting employees with departments:", err);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new EmployeeDepartmentController();
