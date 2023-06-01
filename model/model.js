const mongoose = require("mongoose");
const schema = mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  color_name: {
    type: String,
    require: true,
  },
});
const Color = mongoose.model("color", schema);
module.exports = Color;
