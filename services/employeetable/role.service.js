const db = require("../../db");

class roleservices {

  //GET ALL ROLES
  async getAllRole() {
    try {
      const [rows] = await db.query("SELECT * FROM roles");
      console.log(rows);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  //GET SPECIFIC ROLE BY ID
  async getroleById(role_id) {
    const sql = "SELECT * FROM roles WHERE role_id = ?";
    const values = [role_id];
    console.log("SQL Query:", sql);
    console.log("Values:", values);
    try {
      const [rows] = await db.query(sql, values);
      return rows.length === 0 ? null : rows[0];
    } catch (error) {
      throw error;
    }
  }

  //PUDATE ROLE
  async updaterole(role_id, roleData) {
    const { role_description, department_id } = roleData;
    const sql =
      "UPDATE roles SET role_description = ?, department_id = ? WHERE role_id = ?";
    const values = [role_description, department_id, role_id];
    console.log("SQL Query:", sql);
    console.log("Values:", values);
    try {
      await db.query(sql, values);
      return { success: true, message: "roles updated successfully" };
    } catch (error) {
      console.error("Error updating user in database:", error);
      throw new Error("Failed to update user: " + error.message);
    }
  }

  //DELETE ROLE
  async deleterole(role_id) {
    const sql = "DELETE FROM roles WHERE role_id = ?";
    const values = [role_id];
    console.log("SQL Query:", sql);
    console.log("Values:", values);
    try {
      const [rows] = await db.query(sql, values);
      return { success: true, message: "roles is delete successfully..!" };
    } catch (error) {
      console.error("Error deleting role in database:", error);
      throw new Error("Failed to delete user: " + error.message);
    }
  }

  //ADD ROLE
  async addrole(roleData) {
    const sql =
      "INSERT INTO roles (role_id ,role_description, department_id) VALUES (?, ?,?)";
    const values = [roleData.role_id,   roleData.role_description, roleData.department_id];

    try {
      const [result] = await db.query(sql, values);
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new roleservices();
