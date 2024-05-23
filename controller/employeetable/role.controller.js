const roleService = require("../../services/employeetable/role.service");

class rolecontroller {
  //GET ALL ROLES
  async getAllRoless(req, res) {
    try {
      const roles = await roleService.getAllRole();
      res.status(200).json(roles);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: err.message });
    }
  }

  //GET ONE ROLE BY ID
  async getaonerole(req, res) {
    try {
      const role_id = req.params.role_id;
      const role = await roleService.getroleById(role_id);
      if (!role) {
        return res.status(404).json({ message: "role not found" });
      }
      res.status(200).json(role);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //UPDATE ROLE
  async updateRoles(req, res) {
    try {
      const role_id = req.params.role_id;
      const roleData = req.body;
      console.log("User ID:", role_id);
      console.log("User Data:", roleData);
      const result = await roleService.updaterole(role_id, roleData);
      res.status(200).json({ message: result.message });
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  //DELETE ROLE
  async deleteRoles(req, res) {
    try {
      const role_id = req.params.role_id;
      const result = await roleService.deleterole(role_id);
      if (!result) {
        return res.json(404).json({ message: "role not found" });
      }
      res.status(200).json(result);
    } catch (error) {
      console.error("Error deleting user:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  //ADD ROEL
  async addroles(req, res) {
    try {
      const roleData = req.body;
      const result = await roleService.addrole(roleData);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new rolecontroller();
  