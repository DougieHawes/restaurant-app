const router = require("express").Router();

const {
  signupValidator,
  signinValidator,
  myValidationResult,
} = require("../middleware/validator");
const { signupController, signinController } = require("../controllers/auth");

router.post("/signup", signupValidator, myValidationResult, signupController);
router.post("/signin", signinValidator, myValidationResult, signinController);

module.exports = router;
