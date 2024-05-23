const EmployeeServices = require("../../services/employeetable/employee.service");

class EmployeeController {
  //GET ALL EMPLOYEE
  async getAllEmployees(req, res) {
    try {
      const employees = await EmployeeServices.getAllEmployees();
      res.json(employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //ADD EMPLOYEE
  async addEmployee(req, res) {
    const employeeData = req.body;
    try {
      const result = await EmployeeServices.addEmployee(employeeData);
      res.status(201).json({ message: "Employee added successfully", result });
    } catch (error) {
      console.error("Error adding employee:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //DELETE EMPLOYEE
  async deleteEmployee(req, res) {
    try {
      const employee_id = req.params.employee_id;
      await EmployeeServices.deleteEmployee(employee_id);
      res.status(200).json({ message: "employee deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //UPDATE EMPLOYEE
  async updateEmployee(req, res) {
    try {
      const employee_id = req.params.employee_id;
      const employeeData = req.body;
      console.log("emoloyee ID:", employee_id);
      console.log("emoloyee Data:", employeeData);
      const result = await EmployeeServices.updateEmployee(
        employee_id,
        employeeData
      );
      res.status(200).json({ message: result.message });
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // GET EMPLOYEE WITH EMPLOYEE  ID
  async getEmployeeById(req, res) {
    const employee_id = req.params.employee_id;
    try {
      const employee = await EmployeeServices.getEmployeeById(employee_id);
      if (!employee) {
        return res.status(404).json({ message: "employe not found" });
      } else {
        res.json(employee);
      }
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //   async getdepartmrntId(req, res) {
  //     const  department_Id  = req.params.department_Id;
  //     try {
  //         const employees = await EmployeeServices.getEmployeeByDepartmentID(department_Id);
  //         if (employees.length === 0) {
  //             return res.status(404).json({ message: 'No employees found for this department' });
  //         }
  //         res.json(employees);
  //     } catch (error) {
  //         console.error('Error fetching employees by department:', error);
  //         res.status(500).json({ message: 'Failed to fetch employees' });
  //     }
  // }

  //GET EMPLOYEE WITH DEPARTMENT ID
  async getdepartmrntId(req, res) {
    const departmentId = req.params.departmentid; // Use the correct parameter name
    try {
      const employees = await EmployeeServices.getEmployeeByDepartmentID(
        departmentId
      );
      res.json(employees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving employees" });
    }
  }

  //START EMPLOYEE NAME FRIST LETTER A
  async getEmployeesWithNameStartingWithA(req, res) {
    try {
      const employees =
        await EmployeeServices.getEmployeesWithNameStartingWithA();
      res.json(employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // COUNT EMPLOYEE
  async getEmployeeNameCount(req, res) {
    try {
      const employeeCount = await EmployeeServices.countEmployees();
      res.json({ employeeCount: employeeCount });
    } catch (error) {
      console.error("Error counting users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //GET NOT DEPARTMEENT ID = 2
  async getNotInDepartment2(req, res) {
    try {
      const employees = await EmployeeServices.getNotInDepartment2();
      res.json(employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //GET OLNY DEPARTMENT ID = 1,2
  async getBetweenDepartments1And2(req, res) {
    try {
      const employees = await EmployeeServices.getBetweenDepartments1And2();
      res.json(employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //ALL DEPARTMENT ID  ORDERBY (EX. 1 2 3 4 ....)
  async getAllEmployeesOrderedByDepartmentId(req, res) {
    try {
      const employees =
        await EmployeeServices.getAllEmployeesOrderedByDepartmentId();
      res.json(employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new EmployeeController();
