const userService = require("../../services/usertable/user.service");

class UserController {
  //GET ALL USERS
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //ADD USER
  async addUser(req, res) {
    try {
      const userData = req.body;
      const result = await userService.addUser(userData);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //SELETE USER
  async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      await userService.deleteUser(userId);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // GET SPECIFIC USER WITH ID
  async getUserById(req, res) {
    try {
      const userId = req.params.id;
      const user = await userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //UPDATE USER
  async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      console.log("User ID:", userId);
      console.log("User Data:", userData);
      const result = await userService.updateUser(userId, userData);
      res.status(200).json({ message: result.message });
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  //USER LIMIT
  async getUsersLimit(req, res) {
    try {
      const users = await userService.getUsersLimit4();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  catch(error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }

  //GET  USER NAME START LETTER y
  async getUsersWithA(req, res) {
    try {
      const users = await userService.getUsersWithy();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //get user name end leter a
  async getUserendletera(req, res) {
    try {
      const users = await userService.getUsersWithlasta();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // GET USER WITH USERNAME
  async getUserByUsername(req, res) {
    const { username } = req.params;
    try {
      const user = await userService.getUserByUsername(username);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  //USER DESC
  async userdescding(req, res) {
    try {
      const users = await userService.descid();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //COUNT USER
  async countUsernames(req, res) {
    try {
      const userCount = await userService.countUsernames();
      res.json({ userCount: userCount });
    } catch (error) {
      console.error("Error counting users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new UserController();
