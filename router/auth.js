const router = require("express").Router();
const auth = require("../controller/auth");
const userdata = require("../middleware/getUser");

// Auth
router.post("/auth", auth.auth);
router.post("/authlogin", auth.authlogin);
router.get("/authdetail", userdata, auth.authdetail);

module.exports = router;
