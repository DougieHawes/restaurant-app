const router = require("express").Router();

const {
  signupValidator,
  myValidationResult,
} = require("../middleware/validator");

router.post("/signup", signupValidator, myValidationResult);

module.exports = router;
