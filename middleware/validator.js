const { check, validationResult } = require("express-validator");

exports.signupValidator = [
  check("username").not().isEmpty().trim().withMessage("username is required"),
  check("email").not().isEmpty().trim().withMessage("email is required"),
  check("password").not().isEmpty().trim().withMessage("password is required"),
  check("email").isEmail().normalizeEmail().withMessage("invalid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long"),
];

exports.myValidationResult = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();

  if (hasErrors) {
    const firstError = result.array()[0].msg;

    return res.status(400).json({ errorMsg: firstError });
  }

  next();
};
