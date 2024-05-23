const departmentservices = require("../../services/employeetable/departments.service");

class departmentcontroller {
  //GET ALL DEPARTMENT
  async getAlldepartment(req, res) {
    try {
      const users = await departmentservices.getAllDepartments();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //ADD DEPARTMENT
  async addepartment(req, res) {
    try {
      const userData = req.body;
      const result = await departmentservices.addDepartment(userData);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //DELETE DEPARTMENT
  async deletedepartment(req, res) {
    try {
      const department_id = req.params.department_id;
      await departmentservices.deleteDepartment(department_id);
      res.status(200).json({ message: "department deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //GET SPECIFIC DEPARTMENT
  async getdepartment(req, res) {
    try {
      const department_id = req.params.department_id;
      const department = await departmentservices.getDepartment(department_id);
      if (!department) {
        return res.status(404).json({ message: "department  not found" });
      }
      res.status(200).json(department);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //UPDATE DEPARTMENT
  async updateDepartment(req, res) {
    try {
      const department_id = req.params.department_id;
      const departmentData = req.body;
      console.log("department ID:", department_id);
      console.log("department Data:", departmentData);
      const result = await departmentservices.updateDepartment(
        department_id,
        departmentData
      );
      res.status(200).json({ message: result.message });
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new departmentcontroller();
