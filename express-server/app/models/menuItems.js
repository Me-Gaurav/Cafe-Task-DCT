const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

//create a model
const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
