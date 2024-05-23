const joinUserAndUserinfo = require("../../services/jointable/user&userinfo.service");
class jointablecontroller {
  //USE JOIN
  async jointable(req, res) {
    try {
      const users = await joinUserAndUserinfo.getUsersWithUserInfo();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new jointablecontroller();
