const db = require("../../db");

class DepartmentServices {
  //GET ALL DEPARTMENT
  async getAllDepartments() {
    try {
      const [rows] = await db.query("SELECT * FROM departments");
      return rows;
    } catch (error) {
      throw error;
    }
  }

  //ADD DEPARTMENT
  async addDepartment(departmentData) {
    const sql =
      "INSERT INTO departments (department_id, department_name) VALUES (?, ?)";
    const values = [
      departmentData.department_id,
      departmentData.department_name,
    ];
    try {
      const [result] = await db.query(sql, values);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //DELETE DEPARTMENT
  async deleteDepartment(department_id) {
    const sql = "DELETE FROM departments WHERE department_id = ?";
    const values = [department_id];

    try {
      const [result] = await db.query(sql, values);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //GET SPECIFIC DEPARTMENT WITH DEPARTMENT_ID
  async getDepartment(department_id) {
    const sql = "SELECT * FROM departments WHERE department_id = ?";
    const values = [department_id];

    try {
      const [rows] = await db.query(sql, values);
      return rows.length === 0 ? null : rows[0];
    } catch (error) {
      throw error;
    }
  }

  //UPDATE DEPARTMENT
  async updateDepartment(departmentid, departmentData) {
    const { department_name, department_address } = departmentData;
    const sql = `
        UPDATE departments
        SET department_name = ?,department_address = ?
        WHERE department_id = ?;
      `;
    const values = [department_name, department_address, departmentid];
    console.log("SQL Query:", sql);
    console.log("Values:", values);
    try {
      await db.query(sql, values);
      return { success: true, message: "department updated successfully" };
    } catch (error) {
      console.error("Error updating departmentr  in database:", error);
      throw new Error(
        "Failed to updepartmentservicesdate employee: " + error.message
      );
    }
  }
}

module.exports = new DepartmentServices();
