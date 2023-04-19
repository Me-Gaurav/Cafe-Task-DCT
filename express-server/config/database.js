const mongoose = require("mongoose");

const configureDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/april2023")
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = configureDb;
