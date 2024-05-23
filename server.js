const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const multer = require("multer");

const port = 4000;
const server = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_test",
});

const Router = require("./route/userroute/user.route");
const userinfoRouter = require("./route/userroute/userinfo.route");
const employeeRouter = require("./route/employeeroute/employee.route");
const joinrouter = require("./route/jointable/user&userinfo.route");
const departmentroute = require("./route/employeeroute/departments.route");
const joind_erouter = require("./route/jointable/department&employee.route");
const roleRoute = require("./route/employeeroute/role.route");
const joinedrrouter = require("./route/jointable/e&d&r.route");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const upload = multer();
server.use(upload.none());

server.use("/api", Router);
server.use("/api/userinfo", userinfoRouter);
server.use("/api/employee", employeeRouter);
server.use("/api/join", joinrouter);
server.use("/api/join", joind_erouter);
server.use("/api/join",joinedrrouter)
server.use("/api/department", departmentroute);
server.use("/api/role", roleRoute);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

  db.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
  });
});
