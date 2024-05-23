const e_d_rjoinservices = require("../../services/jointable/e&d&r.service");

class jointableedrcontroller {
  async jointableedr(req, res) {
    try {
      const employees = await e_d_rjoinservices.joinedr();
      res.json(employees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new jointableedrcontroller();
