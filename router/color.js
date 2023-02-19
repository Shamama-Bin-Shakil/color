const router = require("express").Router();
const userdata = require("../middleware/getUser");
const color = require("../controller/color");

// Color
router.get("/get", color.get);
router.post("/post", color.post);
router.get("/api_key", color.api);

module.exports = router;
