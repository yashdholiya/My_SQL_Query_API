const db = require("../../db");
class joineAnddServices {
  // INNER JOIN
  async getEmployeesWithDepartments() {
    try {
      const sql = `
    SELECT employees.employee_id,
     employees.employee_name,
    departments.department_name ,
     departments.department_address
    FROM employees
    INNER JOIN departments ON employees.department_id = departments.department_id;
    `;
      const [rows] = await db.query(sql);
      return rows;
    } catch (error) {
      console.error("Error in getEmployeesWithDepartments:", error);
      throw error;
    }
  }

  //JOIN
  async getEmployeeWithDepartmentJoin() {
    const sql = `
      SELECT 
      employees.employee_id, 
      employees.employee_name, 
      departments.department_name , 
      departments.department_address
      FROM
      employees
      JOIN
      departments ON employees.department_id = departments.department_id;
      `;
    try {
      const [results] = await db.query(sql);
      console.log(" Query", results);
      return results;
    } catch (error) {
      throw error;
    }
  }

  // LEFT JOIN
  async getEmployeeWithDepartmentleftJoin() {
    const sql = `SELECT 
    employees.employee_id, 
    employees.employee_name, 
    departments.department_name, 
    departments.department_address
FROM 
    employees
LEFT JOIN 
    departments ON employees.department_id = departments.department_id`;
    try {
      const [results] = await db.query(sql);
      console.log(" Query", results);
      return results;
    } catch (error) {
      throw error;
    }
  }

  //RIGHT JOIN
  async getEmployeeWithDepartmentrightJoin() {
    const sql = `
      SELECT 
          employees.employee_id, 
          employees.employee_name, 
          departments.department_name, 
          departments.department_address
      FROM 
          departments
      RIGHT JOIN 
          employees ON departments.department_id = employees.department_id
  `;
    try {
      const [results] = await db.query(sql);
      console.log(" Query", results);
      return results;
    } catch (error) {
      throw error;
    }
  }
  //CROSS JOIN
  async getEmployeeWithDepartmentcrossJoin() {
    const sql = `SELECT 
employees.employee_id, 
employees.employee_name, 
departments.department_name, 
departments.department_address
FROM 
employees
CROSS JOIN 
departments
`;
    try {
      const [results] = await db.query(sql);
      console.log(" Query", results);
      return results;
      z;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new joineAnddServices();
