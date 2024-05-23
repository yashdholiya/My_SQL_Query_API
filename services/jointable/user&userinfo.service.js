const db = require("../../db");

class JoinUserAndUserinfo {
  //JOIN
  async getUsersWithUserInfo() {
    const sql = `
      SELECT
          users.id,
          users.username,
          users.email,
          userinfo.age,
          userinfo.bod
      FROM
          users
      JOIN
          userinfo
      ON
          users.id = userinfo.id;
    `;

    try {
      const [results] = await db.query(sql);
      return results;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new JoinUserAndUserinfo();

// class UserInfoService {
//   async addUser(userData, userInfoData) {
//     const connection = await db.getConnection(); // Get a connection from the pool
//     try {
//       await connection.beginTransaction(); // Start a transaction

//       // Insert into users table
//       const userSql = "INSERT INTO users (username, email) VALUES (?, ?)";
//       const [userResult] = await connection.query(userSql, [
//         userData.username,
//         userData.email,
//       ]);

//       const userId = userResult.insertId; // Get the inserted user's ID

//       // Insert into userinfo table
//       const userInfoSql =
//         "INSERT INTO userinfo (id, age, dob) VALUES (?, ?, ?)";
//       await connection.query(userInfoSql, [
//         userId,
//         userInfoData.age,
//         userInfoData.dob,
//       ]);

//       await connection.commit(); // Commit the transaction
//       return {
//         success: true,
//         message: "User and userinfo added successfully",
//         userId,
//       };
//     } catch (error) {
//       await connection.rollback(); // Rollback the transaction in case of an error
//       console.error("Error adding user and userinfo:", error);
//       throw new Error("Failed to add user and userinfo: " + error.message);
//     } finally {
//       connection.release(); // Release the connection back to the pool
//     }
//   }
// }
