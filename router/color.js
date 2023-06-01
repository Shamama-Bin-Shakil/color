const router = require("express").Router();
const userdata = require("../middleware/getUser");
const color = require("../controller/color");

// Color
router.get("/get", color.get);
router.post("/post", userdata, color.post);
router.get("/api_key", color.api);
router.get("/user_color", userdata, color.user_color);

module.exports = router;
