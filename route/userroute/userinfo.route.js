// routes/personRoutes.js
const express = require("express");
const userinforouter = express.Router();
const userinfocontroller = require("../../controller/usertable/userinfo.controller");

userinforouter.get("/users", userinfocontroller.getalluserinfo);

userinforouter.get("/:id", userinfocontroller.getspecific);

userinforouter.post("/user", userinfocontroller.createuserinfo);

userinforouter.put("/:id", userinfocontroller.updateuserinfo);

userinforouter.delete("/:id", userinfocontroller.deleteuserinfo);

userinforouter.get("/userinfo/age18up",userinfocontroller.agecondition);

module.exports = userinforouter;
