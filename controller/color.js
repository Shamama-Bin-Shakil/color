const Color = require("../model/model");

exports.get = (req, res) => {
  res.json({ msg: "welcome" });
};

exports.post = async (req, res) => {
  const { color_name } = req.body;
  const data = await Color({
    color_name,
  });
  const result = await data.save();
  if (!result) {
    return res.json({ msg: "not save" });
  }
  res.json({ msg: "save" });
};

exports.api = async (req, res) => {
  const result = await Color.find();
  res.json({data: result});

};
