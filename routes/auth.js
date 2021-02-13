const router = require("express").Router();

const {
  signupValidator,
  myValidationResult,
} = require("../middleware/validator");
const { signupController } = require("../controllers/auth");

router.post("/signup", signupValidator, myValidationResult, signupController);

module.exports = router;
