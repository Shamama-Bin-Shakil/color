const Color = require("../model/model");

exports.get = (req, res) => {
  res.json({ msg: "welcome" });
};

exports.post = async (req, res) => {
  const { color_name } = req.body;
  const id = req.token;
  const data = await Color({
    user: id,
    color_name: color_name,
  });
  const result = await data.save();
  if (!result) {
    return res.json({ msg: "not save" });
  }
  res.json({ msg: "color save" });
};

exports.api = async (req, res) => {
  const totalColor = await Color.find().count();

  const result = await Color.find();
  res.json({ count: totalColor, data: result });
};

exports.user_color = async (req, res) => {
  const id = req.token;
  const totalColor = await Color.find({ user: id });
  const result = await Color.find({ user: id }).count();
  res.json({ count: result, data: totalColor });
};
