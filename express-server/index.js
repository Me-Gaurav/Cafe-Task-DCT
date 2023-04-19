const express = require("express");
const app = express();
const cors = require("cors");
const port = 3085;
const configureDb = require("./config/database");
const router = require("./config/routes");

app.use(cors());
app.use(express.json());
app.use(router);

//setup Database
configureDb();

app.listen(port, () => {
  console.log("server is running on port", port);
});
