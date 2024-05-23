// controllers/personController.js
const userService = require("../../services/usertable/user.service");
const userinfoservices = require("../../services/usertable/userinfo.service");

class userinfocontroller {
  //GET ALL USERINFO
  async getalluserinfo(req, res) {
    try {
      const persons = await userinfoservices.getAllUsers();
      res.json(persons);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  //GET SPECIFIC USERINFO
  async getspecific(req, res) {
    try {
      const person = await userinfoservices.getUserById(req.params.id);
      if (person) {
        res.json(person);
      } else {
        res.status(404).json({ error: "Person not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // ADD USERINFO
  async createuserinfo(req, res) {
    try {
      const person = await userinfoservices.addUserinfo(req.body);
      res.status(201).json(person);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  //UPDATE USERINFO
  async updateuserinfo(req, res) {
    try {
      const userinfiId = req.params.id;
      const userinfodata = req.body;
      console.log("User ID:", userinfiId);
      console.log("User Data:", userinfodata);
      const result = await userinfoservices.updateUserinfo(
        userinfiId,
        userinfodata
      );
      res.status(200).json({ message: result.message });
    } catch (error) {
      console.error("Error updating user:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  //DELETE USERINFO
  async deleteuserinfo(req, res) {
    try {
      const result = await userinfoservices.deleteUserinfo(req.params.id);
      if (result) {
        res.json({ message: "Person deleted successfully" });
      } else {
        res.status(404).json({ error: "Person not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async agecondition(req, res) {
    try {
      const result = await userinfoservices.age18up();
      res.json(result);
    } catch (error) {
      res.json(500).json({ message: error.message });
    }
  }
}
module.exports = new userinfocontroller();
