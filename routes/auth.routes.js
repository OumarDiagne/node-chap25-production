const router = require("express").Router();
const {
  signinform,
  signin,
  signout,
} = require("../controllers/auth.controller");

router.get("/signin/form", signinform);

router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
