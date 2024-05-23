const { log } = require("util");
const db = require("../../db");

class EmployeeServices {
  //GET ALL EMPLOYEES
  async getAllEmployees() {
    try {
      const [rows] = await db.query("SELECT * FROM employees");
      console.log(rows);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  //ADD EMPLOYEE
  async addEmployee(employeeData) {
    const sql =
      "INSERT INTO employees (employee_id, employee_name, department_id) VALUES (?, ?, ?)";
    const values = [
      employeeData.employee_id,
      employeeData.employee_name,
      employeeData.department_id,
    ];
    try {
      const [result] = await db.query(sql, values);
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // DELETE EMPLOYEE
  async deleteEmployee(employee_id) {
    const sql = "DELETE FROM employees WHERE employee_id = ?";
    const values = [employee_id];

    try {
      const [result] = await db.query(sql, values);
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //DELETE EMPLOYEE
  async updateEmployee(employeeId, employeeData) {
    const { employee_name, department_id } = employeeData;
    const sql =
      "UPDATE employees SET employee_name = ?, department_id = ? WHERE employee_id = ?";
    const values = [employee_name, department_id, employeeId];
    console.log("SQL Query:", sql);
    console.log("Values:", values);
    try {
      await db.query(sql, values);
      return { success: true, message: "Employee updated successfully" };
    } catch (error) {
      console.error("Error updating employee in database:", error);
      throw new Error("Failed to update employee: " + error.message);
    }
  }

  //GET SPECIFIC EMPLOYEE WITH EMPLOYEE_ID
  async getEmployeeById(employee_id) {
    const sql = "SELECT * FROM employees WHERE employee_id = ?";
    const values = [employee_id];
    console.log("SQL Query:", sql);
    console.log("Values:", values);
    try {
      const [rows] = await db.query(sql, values);
      return rows.length === 0 ? null : rows[0];
    } catch (error) {
      throw error;
    }
  }

  //GET EMPLOYEE WITH DEPARTMENT ID
  async getEmployeeByDepartmentID(departmentId) {
    try {
      const query = `SELECT e.*
                     FROM employees e
                     JOIN departments d ON e.department_id = d.department_id
                     WHERE d.department_id = ?`;
      const [rows] = await db.query(query, [departmentId]);
      console.log(rows);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //GET EMPLOYEE NAME STATING LETTER WITH 'a'
  async getEmployeesWithNameStartingWithA() {
    const query = "SELECT * FROM employees WHERE employee_name LIKE 'A%'";
    try {
      const [rows] = await db.query(query);
      console.log(rows);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  //COUNT EMPLOYEE NAME
  async countEmployees() {
    try {
      const [rows] = await db.query(
        "SELECT COUNT(*) AS employeeCount FROM employees"
      );
      console.log(rows);
      return rows[0].employeeCount;
    } catch (error) {
      throw error;
    }
  }

  // GET NOT DEPAETMENT ID 2
  async getNotInDepartment2() {
    const [rows] = await db.query(
      "SELECT * FROM employees WHERE department_id NOT IN (2)"
    );
    try {
      console.log(rows);
      return rows;
    } catch (error) {
      console.error("Error fetching employees from database:", error);
      throw new Error("Failed to fetch employees: " + error.message);
    }
  }

  // GET DEPARTMENT ID1 AND 2
  async getBetweenDepartments1And2() {
    const [rows] = await db.query(
      "SELECT * FROM employees WHERE department_id BETWEEN 1 AND 2"
    );
    try {
      console.log(rows);
      return rows;
    } catch (error) {
      console.error("Error fetching employees from database:", error);
      throw new Error("Failed to fetch employees: " + error.message);
    }
  }

  //GET ALL EMPLOYEES ORDER BY DEPARTMENT ID
  async getAllEmployeesOrderedByDepartmentId() {
    try {
      const [rows] = await db.query(
        "SELECT * FROM employees ORDER BY department_id"
      );
      console.log("Retrieved employees:", rows);
      return rows;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  }
}
module.exports = new EmployeeServices();
