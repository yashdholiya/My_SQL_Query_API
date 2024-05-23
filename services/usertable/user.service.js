// userService.js
const db = require("../../db");

class UserService {
  //GET ALL USERS
  async getAllUsers() {
    try {
      const [rows] = await db.query("SELECT * FROM users");
      return rows;
    } catch (error) {
      throw error;
    }
  }

  //ADD USER
  async addUser(userData) {
    const sql =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    const values = [userData.username, userData.email, userData.password];

    try {
      const [result] = await db.query(sql, values);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //DELETE USER
  async deleteUser(userId) {
    const sql = "DELETE FROM users WHERE id = ?";
    const values = [userId];

    try {
      const [result] = await db.query(sql, values);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //GET SPECIFIC USER BY ID
  async getUserById(userId) {
    const sql = "SELECT * FROM users WHERE id = ?";
    const values = [userId];

    try {
      const [rows] = await db.query(sql, values);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  }

  //UPDATE USER
  async updateUser(userId, userData) {
    const { username, password } = userData;
    const sql = "UPDATE users SET username = ?, password = ? WHERE id = ?";
    const values = [username, password, userId];
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

  // GET USER LIMIT 3
  async getUsersLimit4() {
    try {
      const [rows] = await db.query("SELECT * FROM users LIMIT 4");
      console.log([rows]);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //GET USER WITH FRIST LETER 'y'
  async getUsersWithy() {
    try {
      const [rows] = await db.query(
        "SELECT * FROM users WHERE username LIKE 'y%'"
      );
      console.log([rows]);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //GET USER WITH END LETER 'a'
  async getUsersWithlasta() {
    try {
      const [rows] = await db.query(
        "SELECT * FROM users WHERE username LIKE '%a'"
      );
      console.log([rows]);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //GET USER BY USER_NAME
  async getUserByUsername(username) {
    try {
      const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [
        username,
      ]);
      console.log([rows]);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // DESC USERNAME
  async descid() {
    try {
      const [rows] = await db.query(
        "SELECT * FROM users ORDER BY username DESC"
      );
      console.log([rows]);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //COUNT USERS
  async countUsernames() {
    try {
      const [rows] = await db.query("SELECT COUNT(*) AS userCount FROM users");
      console.log(rows);
      return rows[0].userCount;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
