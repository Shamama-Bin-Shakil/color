const Auth = require("../model/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

exports.auth = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const data = await Auth({
    name,
    email,
    password: hash,
  });
  const result = await data.save();
  if (!result) {
    return res.json({ msg: "success" });
  }
  res.json({ msg: "save" });
};

exports.authlogin = async (req, res) => {
  const { email, password } = req.body;
  const EmailExist = await Auth.findOne({ email });
  if (!EmailExist) {
    return res.json({ msg: "Invalid Credential" });
  }

  const passwordChecker = await bcrypt.compare(password, EmailExist.password);
  if (!passwordChecker) {
    return res.json({ msg: "Invalid Credential" });
  }
  const payload = {
    id: EmailExist._id,
  };
  const userData = jwt.sign(payload, SECRET_KEY);
  res.json({ msg: "success", data: userData });
};

exports.authdetail = async (req, res) => {
  const id = req.token.user;
  console.log(id);
  res.json({ msg: "ok", data: userData });
};
