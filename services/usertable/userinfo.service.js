const db = require("../../db");

class UserInfoServices {
  //GET ALL USERINFO
  async getAllUsers() {
    try {
      const [rows] = await db.query("SELECT * FROM userinfo");
      return rows;
    } catch (error) {
      throw error;
    }
  }

  //ADD USERINFO
  async addUserinfo(userinfoData) {
    const sql =
      "INSERT INTO userinfo (bod, weight, hight, age) VALUES (?, ?, ?, ?)";
    const values = [
      userinfoData.bod,
      userinfoData.weight,
      userinfoData.hight,
      userinfoData.age,
    ];
    try {
      const [result] = await db.query(sql, values);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //GET  SPECIFIC USERINFO WITH ID
  async getUserById(userId) {
    const sql = "SELECT * FROM userinfo WHERE id = ?";
    const values = [userId];

    try {
      const [rows] = await db.query(sql, values);
      return rows.length === 0 ? null : rows[0];
    } catch (error) {
      throw error;
    }
  }

  //UPDATE USERINFO
  async updateUserinfo(userId, userinfoData) {
    const { bod, weight, hight, age } = userinfoData;
    const sql =
      "UPDATE userinfo SET bod = ?, weight = ?, hight = ?, age = ? WHERE id = ?";
    const values = [bod, weight, hight, age, userId];
    console.log("SQL Query:", sql);
    console.log("Values:", values);
    try {
      await db.query(sql, values);
      return { success: true, message: "User updated successfully" };
    } catch (error) {
      console.error("Error updating user in database:", error);
      throw new Error("Failed to update user: " + error.message);
    }
  }

  //DELETE USERINFO
  async deleteUserinfo(userId) {
    const sql = "DELETE FROM userinfo WHERE id = ?";
    const values = [userId];

    try {
      const [result] = await db.query(sql, values);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //age 18 up
  async age18up() {
    const sql = "SELECT * FROM userinfo WHERE age >= 18";
    try {
      const [result] = await db.query(sql);
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserInfoServices();
